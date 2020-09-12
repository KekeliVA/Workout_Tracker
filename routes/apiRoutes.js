const express = require("express");
const router = express.Router();
const db = require("../model/workout");

// Root get to display all workouts in db
router.get("/api/workouts", (req, res) => {
  db.Workout.find()
  .then(workouts => {
    res.json(workouts);
  })
  .catch (err => {
    res.status(400).json(err);
  });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then(new_workout => {
      res.json(new_workout);
    })
    .catch (err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(params.id)
    .then(updated_workout => {
      res.json(updated_workout);
    })
    .catch (err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).limit(7)
    .then(combined_stats => {
      res.json(combined_stats);
    })
    .catch (err => {
      res.status(400).json(err);
    });
});




module.exports = router;