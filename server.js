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
const apiVersion = process.env.API_VERSION || 'v1';
const apiVersionNamespace = `/api/${apiVersion}`;

// import routes
const productsRouter = require('./routes/product-routes');

// register routes
app.use(`${apiVersionNamespace}/products`, productsRouter);

// Route to see API docs
app.get(`${apiVersionNamespace}/docs`, (req, res)=> {
    res.send(`You have reached the SnackPass API ${apiVersion} documentation`)
})

// fpr deploying to Heroku
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
// start server
app.listen(port, ()=>{
    logger.log('🍬 🍪 🌮  Snackpass API is live on port 5000!')
})

