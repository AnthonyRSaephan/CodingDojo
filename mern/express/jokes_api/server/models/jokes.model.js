const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minLength: [10, "Setup has to be at least 10 characters"],
        required: [true, "Setup is required"]
    },
    punchline: {
        type: Number,
        minLength: [3, "Punchline has to be at least 3 characters"],
        required: [true, "Punchline is required"]
    }
})

module.exports = mongoose.model("joke", JokeSchema)