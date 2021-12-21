const mongoose = require("mongoose");

// Calling mongose
const Schema = mongoose.Schema;

// Creating a new schema
const workoutSchema = new Schema({
  // Creating a collection
  exercise: [
    // Creating fields with different data types
    {
      type: {
        type: String,
        trim: true,
        required: "Enter workout type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter workout name",
      },
      duration: {
        type: Number,
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
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});

// Turning the schema into a model to be exported
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
