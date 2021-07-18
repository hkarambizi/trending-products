const mongoose = require('mongoose');
const logger = require('./../utils/logger')(__dirname);

// When deployed, the NODE_ENV will be set
const isLocal = !(process.env.NODE_ENV === "staging" || process.env.NODE_ENV === "production");
// MONGODB_URI will point to Atlas Cloud URI or local db url
const url = isLocal ? 'mongodb://127.0.0.1:27017/snackpass' : process.env.MONGODB_URI;
// use global Promises for mongoose Promises. See: https://masteringjs.io/tutorials/mongoose/promise#the-mongoosepromise-property
mongoose.Promise = global.Promise;
// Connect to DB
const dbConnect = () => {
    mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true })
    mongoose.set('debug', true) // for debugging mongoose
    // Listen for DB connection events
    const db = mongoose.connection;

    db.once('open', () => {
        logger.success(`Database connected at: ${url}`)
    })
    db.on('error', err => {
        logger.error("Database connection error:", err)
    })
    return db;
}

module.exports = dbConnect;
