const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  excercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter excercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter excercise name"
      },
      duration: {
        type: Number,
        required: "Enter excercise duration"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout ;
