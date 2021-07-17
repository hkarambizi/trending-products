const logger = require("./../utils/logger")(__filename);
const DateGenerator = require("../utils/date-generator");
const dbConnect = require("./");
const { fetchSampleOrdersPromise } = require("./models/db-utils");
const db = dbConnect();
const { Order, Product, Item } = require("./models");
const collections = [Order, Product, Item];

// resets the current db
const clearDB = async (cb) => {
    for (const collection of collections) {
        await collection
            .deleteMany({})
            .then(() =>
                logger.db(
                    `All documents in collection ${collection.modelName} have been deleted`
                )
            )
            .catch((err) => {
                logger.error(`Error clearing db collection:`);
                console.log(err);
            });
    }
    logger.log("🧹 🗑  Database successfully cleared...");
    return cb()
};

// custom module for getting dates
const randomDateOffset = new DateGenerator({
    past: true,
    random: true,
    years: 2, // Spread over years because there are 119k records
});
// find product orders
const matchingItems = (order, name) => order.itemName == name;
const past48Hours = new DateGenerator({past: true, days: 2}).generate()
// Only save items ordered within the past 48 hours
const filterByDate = (item) => item.createdAt > past48Hours;
// Keep the newest order at first index
const sortByMostRecent = (a, b) => a + b;
// Filters matching item orders for a Product and sorts them by most recent
const getItemsForProduct = (name, orders) =>
    orders
    .filter((o)=> matchingItems(o, name))
    .map(createItem)
    .filter(filterByDate)
    .sort(sortByMostRecent)


// Not used currently - will use for Orders view
const createOrder = ({ orderID, totalProducts }) => {
    return new Order({
        orderID,
        totalProducts
    });
};
// create Products, and Items
const createProduct = ({ itemName, restaurant, productPrice }) => {
    // set random discount percentage as decimal i.e. 0.75
    const randomDiscount = Math.floor(Math.random() * (100 - 65) + 65) / 100;
    return new Product({
        itemName,
        restaurant,
        productPrice,
        discountDecimal: randomDiscount,
    });
};
const createItem = ({ itemName, orderID, quantity }) => {
    return new Item({
        name: itemName,
        orderID,
        quantity,
        createdAt: randomDateOffset.generate()
    });
};



// Seed Data
const createSeedData = async () => {
    // Get orderData from S3 remote endpoint
   await fetchSampleOrdersPromise()
        .then(async (orders) => {
            // cache the unique products
            let productCache = {};
            // iterate through sample orders and create documents for Products
            for (const o of orders) {
                // if the item has been saved (indicated by productCache) already,
                if (!productCache[o.itemName]) {
                    const productOrderItems = await getItemsForProduct(o.itemName, orders);
                    const product = await createProduct(o);
                    if (productOrderItems.length > 0) {
                        logger.db(`Saving ${productOrderItems.length} item orders of ${product.itemName} into Product`);
                        await productOrderItems.forEach(item => {
                            product.orders.push(item)
                            return item.save()
                        }); // Save each item order
                         // add items to Product.orders
                    }
                    await product.save()
                        .then(
                            (doc) => {
                                logger.log(`Saving product ${o.itemName} with _id: ${doc._id}`);
                                productCache[o.itemName] = doc._id;
                                logger.progress("Updated product cache...")
                            },
                            (err) => {
                                if (err) logger.error(err);
                            }
                        );
                }
            }
        })

};
// reset db and pass in createSeedData as callback
clearDB(createSeedData)
    .then(() => { // close db connection whether it fails or succeeds
        db.close(() => {
            logger.success(
                "Database seeding complete, Mongoose connection disconnected"
            );
        });
    })
    .catch((err) => {
        db.close(() => {
            logger.error(err);
        });
    });
