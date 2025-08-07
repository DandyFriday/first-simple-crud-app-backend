const express = require('express');
const Product = require("../models/ProductModel.js");
const router = express.Router();
const {getProducts, 
    getProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct,
} = require('../controllers/ProductControllers.js')

// Get a product
router.get('/', getProducts);
router.get('/:id', getProduct);

// Post a product
router.post('/', createProduct);

//Update a Product
router.put('/:id', updateProduct);

//Delete a Product
router.delete('/:id', deleteProduct, deleteProduct);



module.exports = router;