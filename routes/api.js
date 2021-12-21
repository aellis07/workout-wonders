const router = require("express").Router();
const Workout = require("../models/workoutModel.js");
const { route } = require("./htmlRoutes.js");

router.post("/workouts", (req, res) => {
  Workout.create({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
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
router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercise.duration" },
        totalWeight: { $sum: "$exercises.weight" },
      },
    },
  ])
    .limit(10)
    .then((workout) => {
      console.log(workout);
      res.json(workout);
    })
    .catch((e) => {
      res.json(e);
    });
});

module.exports = router;
