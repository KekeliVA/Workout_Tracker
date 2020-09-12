const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {type: Date, default: Date.now},
  exercises: [
    {
      type: {type: String},
      name: {type: String},
      duration: {type: Number},
      weight: {type: Number},
      reps: {type: Number},
      sets: {type: Number},
      distance: {type: Number}
     }
  ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// type, name, and duration need to be required (NOT NULL)
// do a trim on type and name
// look up how to make a virtual in mongoose to be able to create total duration (creates a virtual column, takes a function to return it)