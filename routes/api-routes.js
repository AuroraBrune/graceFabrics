let db = require("../models");

module.exports = function (app) {
    app.get("/api/products", function (req, res) {
        db.Products.findAll({}).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.get("/api/products/stoles", function (req, res) {
        db.Products.findAll({
            where: {
                type: "stoles"
            }
        }).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.get("/api/products/alter", function (req, res) {
        db.Products.findAll({
            where: {
                type: "alter-cloth"
            }
        }).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.delete("/api/:id", function (req, res) {
        db.Products.destroy({
            where:{
                id: req.params.id
            }
        }).then(function(dbProducts){
            res.json(dbProducts)
        })
    })

    app.post("/api/admin", function(req, res){
        db.Products.create({
            // description:
            // price:
            // img1:
            // type:
            // img2:
            // img3:
        })
    })

    app.put("/api/admin", function(req, res){
        db.Products.update({
            //update products
        })
    })
}