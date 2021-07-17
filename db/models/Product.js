const { Schema , model } = require('./db-utils');
const { ItemSchema } = require('./');
// Define Product Schema

const ProductSchema = new Schema({
    itemName: String,
    restaurant: String,
    productPrice: Number,
    orders: {
        type: [ItemSchema],
        default: []
    },
    discountDecimal: {
        type: Number,
        default: null
    },
},
{
    timestamps: true
})

const Product = model('Product', ProductSchema);

module.exports = { Product, ProductSchema };
