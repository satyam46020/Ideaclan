const Lecture = require('../models/Lecture');

// Create a new lecture
createLecture = async (req, res) => {
  try {
    const { courseId, title, startTime, endTime, description, link } = req.body;

    const lecture = new Lecture({
      courseId,
      title,
      startTime,
      endTime,
      description,
      link,
    });

    await lecture.save();

    res.json(lecture);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get all lectures for a course
getAllLecturesByCourseId = async (req, res) => {
  try {
    const lectures = await Lecture.find({ courseId: req.params.courseId });
    res.json(lectures);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports={createLecture,getAllLecturesByCourseId}
