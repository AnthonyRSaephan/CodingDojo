const JokeController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes", JokeController.getAll)
    app.get("/api/jokes/random", JokeController.getRandom)
    app.get("/api/jokes/:id", JokeController.getOne)
    app.post("/api/jokes/new", JokeController.create)
    app.put("/api/jokes/update/:id", JokeController.updateOne)
    app.delete("/api/jokes/delete/:id", JokeController.deleteOne)
}