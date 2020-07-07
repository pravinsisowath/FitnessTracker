const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutModel = new Schema({
    day: {
      type: Date,
      default: () => new Date
    },
    exercises: [
      {
        name: {
          type: String,
          required: true
        },
        sets: {
          type: Number,
          required: true
        },
      }
    ]
  })

const Workout = mongoose.model("Workout", workoutModel)

module.exports = Workout