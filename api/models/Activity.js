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
  questions: [
    {
      id: Schema.Types.ObjectId,
      value: String,
      answers: [{
        value: String,
        correct: Boolean,
      }],
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

module.exports = mongoose.model('Activity', schema);
