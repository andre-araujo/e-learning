const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  finishedLessons: [
    {
      lessonId: {
        type: Schema.Types.ObjectId,
        ref: 'Lesson',
      },
    },
  ],
  finishedActivities: [
    {
      activityId: {
        type: Schema.Types.ObjectId,
        ref: 'Activity',
      },
      correctAnswers: Number,
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
  certificate: Boolean,
});

if (!schema.options.toObject) {
  schema.options.toObject = {};
}

schema.options.toObject.transform = (doc, { _id, __v, ...ret }) => ({
  id: _id,
  ...ret,
});

module.exports = mongoose.model('CourseSubscription', schema);
