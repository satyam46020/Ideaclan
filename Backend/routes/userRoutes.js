const express = require('express');

const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:id', auth("admin"), userController.getUserById);

router.get('/', auth("admin"), userController.getAllUsers);

router.post('/', auth("admin"), userController.createUser)

router.patch('/:id', auth("admin"), userController.updateUserById)

router.delete('/:id', auth("admin"), userController.deleteUserById)

module.exports = router;
