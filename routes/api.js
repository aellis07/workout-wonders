const router = require("express").Router();
const Workout = require("../models/workoutModel.js");
const { route } = require("./htmlroutes.js");

// Creating a new workout
router.post("/workouts", (req, res) => {
  Workout.create({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Getting the total duration of a workout
router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          // Over all time spent exercising
          $sum: "$exercise.duration",
        },
      },
    },
  ])
    .then((workout) => {
      console.log(workout);
      res.json(workout);
    })
    .catch((e) => {
      res.json(e);
    });
});

// Finding a specific workout
router.put("/workouts/:id", (req, res) => {
  console.log("PARAMS", req.params);
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercise: req.body } },
    { new: true, runValidators: true }
  )
    .then((workout) => {
      res.json(workout);
    })
    .catch((e) => {
      res.json(e);
    });
});

// Sum of duration and weight over the past 7 workouts
router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercise.duration" },
        totalWeight: { $sum: "$exercises.weight" },
      },
    },
  ])
    // Limits the aggregation to only 7 values
    .limit(7)
    .then((workout) => {
      console.log(workout);
      res.json(workout);
    })
    .catch((e) => {
      res.json(e);
    });
});

module.exports = router;
