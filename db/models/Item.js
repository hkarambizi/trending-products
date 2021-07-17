const { Schema, model } = require('./db-utils');
// Define Item Schema
const ItemSchema = new Schema({
    name: String,
    orderID: Number,
    quantity: Number
},
{
    timestamps: true
})

const Item = model('Item', ItemSchema);
module.exports = { Item, ItemSchema };
