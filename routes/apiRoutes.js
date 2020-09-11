const router = express.Router();
const { db } = require("../model/workout");
const Workout = require("../model/workout");

// Root get to display all workouts in db
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .then(workouts => {
    res.json(workouts);
  })
  .catch (err => {
    res.status(400).json(err);
  });
});

router.post("/api/new_workouts", (req, res) => {
  db.Workout.create(req)
    .then(new_workout => {
      res.json(new_workout);
    })
    .catch (err => {
      res.status(400).json(err);
    });
});




module.exports = router;