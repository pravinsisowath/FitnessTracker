const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const PORT = process.env.PORT
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

const URI = process.env.MONGODB_URI || "mongodb://localhost/workoutdb"
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

require('./routes/apiRoutes')(app)

app.listen(PORT, () => {
    console.log(PORT)
})


