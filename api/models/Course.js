const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  instructorName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  keyWords: {
    type: String,
    required: true,
  },
  instructorId: {
    type: String,
    required: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Lesson',
    },
  ],
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Account',
    },
  ],
});

if (!schema.options.toObject) {
  schema.options.toObject = {};
}

schema.options.toObject.transform = (doc, { _id, __v, ...ret }) => ({
  id: _id,
  ...ret,
});

module.exports = mongoose.model('Course', schema);
