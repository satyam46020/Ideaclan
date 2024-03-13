const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const adminAuth = require('../middleware/adminMiddleware');

router.get('/:id', adminAuth, userController.getUserById);

router.get('/', adminAuth, userController.getAllUsers);

module.exports = router;
