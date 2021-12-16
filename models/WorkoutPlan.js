const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter workout name",
  },
  exerciseType: {
    type: String,
    trim: true,
    required: "Enter workout type",
  },
  weight: {
    type: Number,
    required: "Enter the amount of weight used",
  },
  reps: {
    type: Number,
    required: "Enter how many reps completed",
  },
  sets: {
    type: Number,
    required: "Enter how many sets completed",
  },
  duration: {
    type: Date,
    default: Date.now,
    required: "Enter the duration of the workout",
  },
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
