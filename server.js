const express = require('express');
require('dotenv').config() // access environment variables
const logger = require('./utils/logger')(__filename);
const dbConnect = require('./db');
// connect to database
dbConnect();
// initialize express app
const app = express();
const port = process.env.PORT || 5000;

// Route to see API docs
app.get('/api/docs', (req, res)=> {
    res.send("You have reached the SnackPass API")
})

// start server
app.listen(port, ()=>{
    logger.log('🍬 🍪 🌮  Snackpass API is live on port 5000!')
})
