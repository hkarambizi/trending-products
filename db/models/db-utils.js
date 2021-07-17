const mongoose = require('mongoose');
const axios = require('axios').default;
const logger = require("./../../utils/logger")(__filename);
// export mongoose's Schema class and model method
const { Schema, model } = mongoose;

const fetchSampleOrdersPromise = async () => {
    logger.progress("Attempting to fetch Sample Orders from S3...")
    return axios.get("https://snackpass-interview.s3.amazonaws.com/orders.json")
    .then(response => {
        if(response.statusText != 'OK') return logger.error('Error fetching Sample Data from S3');
        logger.success(`Found ${response.data.length} sample snackpass order records`)
        return response.data;
    })
}

module.exports = {
    Schema,
    model,
    fetchSampleOrdersPromise
}
