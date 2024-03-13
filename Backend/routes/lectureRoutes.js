const express = require('express');

const lectureController = require('../controllers/lectureController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth("admin") ,lectureController.createLecture);

router.get('/:courseId', auth("default") ,lectureController.getAllLecturesByCourseId);

module.exports = router;
