const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  finishedLessons: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Lesson',
    },
  ],
  accountId: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },
});

if (!schema.options.toObject) {
  schema.options.toObject = {};
}

schema.options.toObject.transform = (doc, { _id, __v, ...ret }) => ({
  id: _id,
  ...ret,
});

module.exports = mongoose.model('CourseSubscription', schema);
