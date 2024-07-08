const express = require('express');

const router = express.Router();

const productController = require('../Controllers/productController');



// Create a new product

router.post('/', productController.CreateProduct);

// get route

router.get('/', productController.getAllProducts);

// get by id

router.get('/:id', productController.getById);

// update by id

router.put('/:id', productController.updateProduct);

// delete by id

router.delete('/:id', productController.deleteProduct);

module.exports = router;