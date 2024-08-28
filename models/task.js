const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must provide name'],
    trim: true,
    maxlength: [90, 'Name cannot be more than 90 characters'],
    minlength: [5, 'Name cannot be less than 5 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
