const ProductController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api", ProductController.getAll)
    app.get("/api/:id", ProductController.getOne)
    app.post("/api/create", ProductController.create)
    app.put("/api/product/update/:id", ProductController.updateOne)
    app.delete("/api/delete/:id", ProductController.deleteOne)
}