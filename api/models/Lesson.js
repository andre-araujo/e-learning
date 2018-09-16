const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  moduleName: {
    type: String,
    required: true,
  },
  videoURL: {
    type: String,
    required: false,
  },
  youtubeVideoId: {
    type: String,
    required: false,
  },
});

if (!schema.options.toObject) {
  schema.options.toObject = {};
}

schema.options.toObject.transform = (doc, { _id, __v, ...ret }) => ({
  id: _id,
  ...ret,
});

module.exports = mongoose.model('Lesson', schema);
