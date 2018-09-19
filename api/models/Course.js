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
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Activity',
    },
  ],
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Lesson',
    },
  ],
  subscriptions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'CourseSubscription',
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
