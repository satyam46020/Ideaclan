const express = require('express');

const courseController = require('../controllers/courseController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth("admin") , courseController.createCourse);

router.get('/', auth("default") , courseController.getAllCourses);

router.get('/:id', auth("default") , courseController.getCourseById);

module.exports = router;