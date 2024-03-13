const express = require('express');

const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:id', auth("admin"), userController.getUserById);

router.get('/', auth("default"), userController.getAllUsers);

module.exports = router;
