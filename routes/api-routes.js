let db = require("../models");

module.exports = function (app) {
    app.get("/api/products", function (req, res) {
        db.Products.findAll({}).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.get("/api/products/rainbow", function (req, res) {
        db.Products.findAll({
            where: {
                type: "Rainbow-Stole"
            }
        }).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.get("/api/products/easter", function (req, res) {
        db.Products.findAll({
            where: {
                type: "Easter-Stole"
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