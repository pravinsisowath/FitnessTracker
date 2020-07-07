const Workout = require('../models/workout.js')
const router = require("express").Router()

router.get('/api/workouts', (req, res) => {
    Workout.find()
    .then(workoutsdb => {
        res.json(workoutsdb)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(workoutsdb => {
        res.json(workoutsdb)
      })
      .catch(err => {
        res.json(err)
      })
  })

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
    )
      .then(workoutsdb => {
        res.json(workoutsdb)
      })
      .catch(err => {
        res.json(err)
      })
  })

router.delete('/api/workouts', ({ body }, res) => {
    Workout.findByIdAndRemove(body.id)
    .then(() => {
        res.json(true)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router;