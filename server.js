const express = require('express');
require('dotenv').config() // access environment variables
const logger = require('./utils/logger')(__filename);
const dbConnect = require('./db');
const { Product } = require('./db/models');

// connect to database
dbConnect();
// initialize express app
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/trending', async (req, res) => {
    logger.log("querying for trending product...")
    Product.find({})
    .then((products) => {
        products = products.map(p => ({...p._doc, orderCount: p._doc.orders.length})).sort((a, b) => a.orderCount + b.orderCount);
        logger.success(`Found ${products.length} records to match query`);
        res.status(200).json(products);
    })
    .catch(err => logger.error(err))
})
// Route to see API docs
app.get('/api/docs', (req, res)=> {
    res.send("You have reached the SnackPass API")
})

// start server
app.listen(port, ()=>{
    logger.log('🍬 🍪 🌮  Snackpass API is live on port 5000!')
})
