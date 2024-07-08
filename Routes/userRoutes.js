const express = require('express');

const router = express.Router();

const userController = require('../Controllers/userController');

// Create a new user

router.post('/', userController.CreateUser);

// get route

router.get('/', userController.getAllUsers);

// get by id

router.get('/:id', userController.getById);

// update by id

router.put('/:id', userController.updateUser);

// delete by id

router.delete('/:id', userController.deleteUser);

module.exports = router;