const logger = require('./../utils/logger')(__filename);
const { Product } = require('./../db/models');
const { mapDocsToProducts, filterOutEmpty} = require('./helpers');

// query builder
const sortedProductsQuery = ({sortBy}) => {
    const sort = sortBy == "popularity" ? "orderCount" : "lastOrderedAt";
    logger.log(`querying for trending product with query params: sortBy=${sortBy}...`);
    return sortBy == "recent" ? Product.find({}).sort({lastOrderedAt: 'desc'}) : Product.find({}).sort({orderCount: 'desc'})
}

// route handler
const trending = (req, res) => {
    sortedProductsQuery(req.query)
    .then((results) => {
        const products = results
        .filter(filterOutEmpty);
        logger.success(`Found ${products.length} records to match query`);
        res.status(200).json(products);
    })
    .catch(err => {
        logger.error(err)
        res.status(500)
        res.json({error: err.message})
    })
}

module.exports = {
    trending
}
