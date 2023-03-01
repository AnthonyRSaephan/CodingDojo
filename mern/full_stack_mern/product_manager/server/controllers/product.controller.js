const {Product} = require("../models/product.model")

module.exports.getAll = (request, response) => {
    Product.find()
        .then(allProducts => {
            response.json(allProducts)
        }).catch(error => {
            response.json(error)
        })
}

module.exports.create = (request, response) => {
    Product.create(request.body)
        .then(newProduct => {
            response.json(newProduct)
        }).catch(error => {
            response.json(error)
        })
}

module.exports.getOne = (request, response) => {
    Product.findOne({_id: request.params.id})
        .then(product => {
            response.json(product)
        }).catch(error => {
            response.json(error)
        })
}

module.exports.updateOne = (request, response) => {
    Product.findOneAndUpdate(
        {_id: request.params.id},
        request.body,
        {returnOriginal: false}
    ).then(updatedProduct => {
        response.json(updatedProduct)
    }).catch(error => {
        response.json(updatedProduct)
    })
}

module.exports.deleteOne = (request, response) => {
    Product.deleteOne({_id: request.params.id})
        .then(deletedProduct => {
            response.json(deletedProduct)
        }).catch(error => {
            response.json(error)
        })
}