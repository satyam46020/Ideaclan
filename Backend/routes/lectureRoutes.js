const express = require('express');
const router = express.Router();
const lectureController = require('../controllers/lectureController');
const adminAuth = require('../middleware/adminMiddleware');

router.post('/', adminAuth ,lectureController.createLecture);

router.get('/:courseId', lectureController.getAllLecturesByCourseId);

module.exports = router;
