const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: "Enter exercise name",
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
