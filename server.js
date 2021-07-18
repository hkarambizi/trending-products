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

// Route to see API docs
app.get(`${apiVersionNamespace}/docs`, (req, res)=> {
    res.send(`You have reached the SnackPass API ${process.env.API_VERSION} documentation`)
})

// start server
app.listen(port, ()=>{
    logger.log('🍬 🍪 🌮  Snackpass API is live on port 5000!')
})

