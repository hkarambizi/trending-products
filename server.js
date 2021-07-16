const express = require('express');

// initialize express app
const app = express();
const port = process.env.PORT || 5000;

// Route to see API docs
app.get('/api/docs', (req, res)=> {
    res.send("You have reached the SnackPass API")
})

// start server
app.listen(port, ()=>{
    console.log('🍬 🍪 🌮  Snackpass API is live on port 5000!')
})
