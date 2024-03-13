const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  prerequisites: {
    type: String,
  },
});

const Coursemodel = mongoose.model('Course', CourseSchema);

module.exports = Coursemodel