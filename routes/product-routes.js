/**
 * @swagger
 * /trending:
 *   get:
 *     summary: Retrieve a list of trending products.
 *     description: Retrieve a list of trending products ordered on SnackPass Interview application.
 *     parameters:
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: The sorting mechanism for the list of products. Options include "popularity" and "recent"
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The auto-generated id of the book
 *                 itemName:
 *                   type: string
 *                   description: The name of the products.
 *                 restaurant:
 *                   type: string
 *                   description: The restaurant where the product was ordered.
 *                 orderCount:
 *                   type: number
 *                   description: The count of orders of the particular product
 *                 discountDecimal:
 *                   type: number
 *                   description: The decimal representation of the discounted price
 *                 lastOrderedAt:
 *                   type: string
 *                   format: date
 *                   description: The createdAt for the last order of this product.$ref
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: The date of the record creation.
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: The date of the record update.
 *               example:
 *                   itemName: Chocolate Pudding Cake
 *                   restaurant: Mary Mac
 *                   productPrice: 7.99
 *                   discountDecimal: 0.92
 *                   orderCount: 1
 *                   lastOrderedAt: 2021-07-19T03:13:21.298Z
 *                   createdAt: 2021-07-19T03:13:21.298Z
 *                   updatedAt: 2021-07-19T03:13:21.298Z
 */
const express = require('express');
const router = express.Router()
// Controller
const productsController = require('../controllers/product-controller');

// GET /products/trending - accepts [?page=pageNum&limit=numProducts]
router.get('/trending', productsController.trending);

module.exports = router;
