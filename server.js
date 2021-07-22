const path = require('path');
const express = require('express'),
  bodyParser = require('body-parser'),
  swaggerJsdoc = require('swagger-jsdoc'),
  swaggerUi = require('swagger-ui-express');
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



const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Snackpass Products API",
      version: "0.1.0",
      description: "This Express API documented by Swagger is used for the Trending Products App built for Harry Karambizi's Interview",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Trending Products App",
        url: "https://harry-is-trending-at-snackpass.herokuapp.com/",
        email: "hkarambizi@gmail.com"
      },
    },
    servers: [
      {
        url: `http://localhost:5000${apiVersionNamespace}/products`
      }
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
// register routes
app.use(`${apiVersionNamespace}/products`, productsRouter);

// Route to see Swagger API docs
app.use(`${apiVersionNamespace}/docs`, swaggerUi.serve, swaggerUi.setup(specs));

// fpr deploying to Heroku
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// start server
app.listen(port, () => {
  logger.log('🍬 🍪 🌮  Snackpass API is live on port 5000!')
})

