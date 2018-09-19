const mongoose = require('mongoose');

const { Schema } = mongoose;

const Tests = mongoose.model('tests', new Schema({
  name: { type: String },
}, { timestamps: true }));

module.exports.get = () => {
  return Tests.find();
};