const express = require('express');
const router = express.Router()
// Controller
const productsController = require('../controllers/product-controller');

// GET /products/trending - accepts [?page=pageNum&limit=numProducts]
router.get('/trending', productsController.trending);

module.exports = router;
