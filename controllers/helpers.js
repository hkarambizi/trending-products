const logger = require("../utils/logger")(__filename);
const error = require("../utils/errors");
// Not usable: when paginated, it only sorts after the db query has been called
const sortByFieldAndOrder =
    (field, ascending = false) =>
    (a, b) => {
        return ascending ? a[field] - b[field] : b[field] - a[field];
    }
// Not usable: when paginated, it only sorts after the db query has been called
const sortByLatest = sortByFieldAndOrder('lastOrderedAt');

// Not usable: when paginated, it only maps after the db query has been called
const mapDocsToProducts = p => ({...p._doc, orderCount: p._doc.orders.length})

const filterOutEmpty = p => p.orderCount > 1;

module.exports = {
    sortByFieldAndOrder,
    mapDocsToProducts,
    filterOutEmpty,
    sortByLatest
};
