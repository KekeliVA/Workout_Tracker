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

WorkoutSchema.virtual("totalDuration").get(function() {
  let currentDurationSum = 0;
  for (let i = 0; i < exercises.length; i++) {
    currentDurationSum = this.exercises[i].duration + currentDurationSum
  }
  console.log(currentDurationSum);
  return currentDurationSum;
})


module.exports = Workout;

// type, name, and duration need to be required (NOT NULL)
// do a trim on type and name
// look up how to make a virtual in mongoose to be able to create total duration (creates a virtual column, takes a function to return it)