const logger = require('./../utils/logger')(__filename);
const { Product } = require('./../db/models');
const { sortByFieldAndOrder } = require('./helpers');

const trending = (req, res) => {
    // console.log(req.query);
    logger.log("querying for trending product...")
    Product.find({})
    .then((products) => {
        // sort by most orders
        products = products.map(p => ({...p._doc, orderCount: p._doc.orders.length})).sort(sortByFieldAndOrder('orderCount'));
        logger.success(`Found ${products.length} records to match query`);
        res.status(200).json(products);
    })
    .catch(err => logger.error(err))
}

module.exports = {
    trending
}
