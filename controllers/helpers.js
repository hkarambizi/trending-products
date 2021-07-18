const sortByFieldAndOrder = (field, ascending = false) => (a, b) => ascending ? a[field] - b[field] : b[field] - a[field];

module.exports = {
    sortByFieldAndOrder
}
