const express = require('express');
require('dotenv').config() // access environment variables
const logger = require('./utils/logger')(__filename);
const dbConnect = require('./db');
// connect to database
dbConnect();
// initialize express app
const app = express();
express.Router()
const port = process.env.PORT || 5000;
const apiVersionNamespace = `/api/${process.env.API_VERSION}`;

// import routes
const productsRouter = require('./routes/product-routes');

// register routes
app.use(`${apiVersionNamespace}/products`, productsRouter);
// app.get(`${apiVersionNamespace}/products`, (req, res) => {
//     logger.log("querying for trending product...")
//     Product.find({})
//     .then((products) => {
//         // sort by most orders
//         products = products.map(p => ({...p._doc, orderCount: p._doc.orders.length})).sort(sortDescending);
//         logger.success(`Found ${products.length} records to match query`);
//         res.status(200).json(products);
//     })
//     .catch(err => logger.error(err))
// })
// Route to see API docs
app.get(`${apiVersionNamespace}/docs`, (req, res)=> {
    res.send(`You have reached the SnackPass API ${process.env.API_VERSION} documentation`)
})

// start server
app.listen(port, ()=>{
    logger.log('🍬 🍪 🌮  Snackpass API is live on port 5000!')
})
module.exports = {
    express
}
