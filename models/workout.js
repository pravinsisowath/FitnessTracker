const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutModel = new Schema({
    day: {
      type: Date,
      default: Date
    },
    exercises: [
      {
        name: {
          type: String,
        },
        sets: {
          type: Number
        },
      }
    ]
  })

const Workout = mongoose.model("Workout", workoutModel)

module.exports = Workout