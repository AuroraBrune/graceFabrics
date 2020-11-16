let db = require("../models");
let passport = require('../config/passport')
module.exports = function (app) {
    app.get("/api/products", function (req, res) {
        db.Products.findAll({}).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.get("/api/products/stoles", function (req, res) {
        db.Products.findAll({
            where: {
                type: "stole"
            }
        }).then(function (dbProducts) {
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

    app.get("/api/products/pentecost-stoles", function (req, res) {
        db.Products.findAll({
            where: {
                type: "stole",
                name: "pentecost stole"
            }
        }).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.get("/api/products/lenten-stoles", function (req, res) {
        db.Products.findAll({
            where: {
                type: "stole",
                name: "lenten stole"
            }
        }).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.get("/api/products/advent-stoles", function (req, res) {
        db.Products.findAll({
            where: {
                type: "stole",
                name: "advent stole"
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
        res.json({
            username: req.body.email
        });
    });

    app.get("/api/getAllOrders", function (req, res) {
        db.Orders.findAll({
            where: {
                active: 1
            }
        })
        .then(function (dbOrders) {
            res.json(dbOrders)
        })
    })

    app.get("/api/getOrder/:id", function (req, res) {
        const id = req.params.id;
        db.Orders.find({
           where: { id: id }
        })
        .then(order => {
            res.json(order)
        })
    })

    app.post("/api/addOrder", function(req, res){
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const orderDescr = req.body.orderDescr;
        const orderPrice = req.body.orderPrice;
    
        db.Orders.create({
            firstName: firstName,
            lastName: lastName,
            orderDescr: orderDescr,
            orderPrice: orderPrice
        })
        .then(newOrder => {
            res.json(newOrder)
        })
    })

    app.patch("/api/updateOrder/:id", function(req, res){
        const id = req.params.id;
        const updates = req.body.updates;
        db.Orders.find({
            where: { id: id }
        })
        .then(order => {
            return order.updateAttributes(updates)
          })
          .then(updatedOrder => {
            res.json(updatedOrder);
          });
    })

    app.patch("/api/removeOrder/:id", function(req, res){
        //remove order does not delete... it marks the active attribute as false
        const id = req.params.id;
        const updates = req.body.updates;
        db.Orders.find({
            where: { id: id }
        })
        .then(order => {
            return order.updateAttributes(updates)
          })
          .then(updatedOrder => {
            res.json(updatedOrder);
          });
    })
}

}