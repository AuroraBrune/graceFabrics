let db = require("../models");
let passport = require('../config/passport')
module.exports = function (app) {
    app.get("/api/products", function (req, res) {
        db.Products.findAll({}).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.get("/api/products/rainbow-stoles", function (req, res) {
        db.Products.findAll({
            where: {
                type: "stole",
                name: "rainbow stole"
            }
        }).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.get("/api/products/christmas-stoles", function (req, res) {
        db.Products.findAll({
            where: {
                type: "stole",
                name: "christmas stole"
            }
        }).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.get("/api/products/easter-stoles", function (req, res) {
        db.Products.findAll({
            where: {
                type: "stole",
                name: "easter stole"
            }
        }).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.get("/api/products/banners", function (req, res) {
        db.Products.findAll({
            where: {
                type: "banner"
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
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        console.log('almost there');
        res.json({
            username: req.body.email
        });
    });
}