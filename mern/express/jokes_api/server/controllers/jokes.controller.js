const Joke = require("../models/jokes.model")

module.exports.getAll = (request, response) => {
    Joke.find()
        .then(allJokes => {
            response.json(allJokes)
        }).catch(error => {
            response.json(error)
        })
}

module.exports.getOne = (request, response) => {
    Joke.findOne({_id: request.params.id})
        .then(oneJoke => {
            response.json(oneJoke)
        }).catch(error => {
            response.json(error)
        })
}

module.exports.create = (request, response) => {
    console.log(request.body)
    Joke.create(request.body)
        .then(newJoke => {
            response.json(newJoke)
        }).catch(error => {
            response.json(error)
        })
}

module.exports.updateOne = (request, response) => {
    Joke.updateOne({_id: request.params.id}, request.body, {new: true, runValidators: true})
        .then(updatedJoke => {
            response.json(updatedJoke)
        }).catch(error => {
            response.json(error)
        })
}

module.exports.deleteOne = (request, response) => {
    Joke.deleteOne({_id: request.params.id})
        .then(deletedJoke => {
            response.json(deletedJoke)
        }).catch(error => {
            response.json(error)
        })
}

module.exports.getRandom = (request, response) => {
    Joke.aggregate([{$sample: {size: 1}}])
        .then(randomJoke => {
            response(randomJoke)
        }).catch(error => {
            response(error)
        })
}