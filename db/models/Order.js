const { Schema , model } = require('./db-utils');
const { ItemSchema } = require('./');

// NOTE: Currently not used yet. Will need for /orders view

// Define Order Schema
const OrderSchema = new Schema({
    orderID: Number,
    items: {
        type: [ItemSchema],
        default: []
    },
    totalProducts: Number,
    totalCost: {
        type: Number,
        default: null
    },
},
{
    timestamps: true
})

const Order = model('Order', OrderSchema);

module.exports = { Order, OrderSchema };
