let db = require('../models');
let passport = require('../config/passport');
let crypto = require('crypto');
let nodemailer = require('nodemailer');

const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {

    app.get("/api/products", async function (req, res) {
        let dbProduct = await db.Products.findAll({})

        if (dbProduct[0] === undefined) {

            await db.Products.create({
                name: "Rainbow Stole",
                description: "Rainbow stole done in tie-dye",
                price: 56.99,
                img1: "https://lh3.googleusercontent.com/pw/ACtC-3ewJb0M6xYuRKphSMBOStCfAYePLrKlir0e7fWgpB4DwuyyFKWcrxN7tPIyCAd-1XFMzXyfQ1y3W4JUMu4vanOTMJ5lZqaUUfLuM9SQfWwErzIIe2h_vVK0H5xtk3Al1ZxxTje3ZpWSz82jxH9mhSI=w220-h640-no?authuser=0",
                type: "Stole",
            })
            await db.Products.create({
                name: "Easter Stole",
                description: "Easter stole done in tie-dye",
                price: 42.99,
                img1: "https://lh3.googleusercontent.com/pw/ACtC-3dGQi2iN0rOk_g4UXhQl2JXsS9B-s3qIdIh_nvGmgDt3QY6t3eqjDCkrVkgxROl3tqSO2AdibP4gBW3udqLf72L8lZgh9GbMNA5rnxUzOPLeXMCozOpSjmdLf8jzxypzoBrSfE7XyePf1jslPvhFLU=w324-h500-no?authuser=0",
                type: "Stole",
            })
            await db.Products.create({
                name: "Christmas Stole",
                description: "Christmas stole done in tie-dye",
                price: 99.99,
                img1: "https://lh3.googleusercontent.com/pw/ACtC-3dLIt5p4QAQVKcJHG-JmEfww3F1EAQIZC_veg-alD7dc8E7MFV-zO4JYJIK8J534WVTKySuqTW1OlF9mAhF31unWiaU8xYZOG1_72kbb8IqQeRYrKEFeqoW_LO986WdVYM3djZzADoLlnzV_0nkuQ8=w324-h504-no?authuser=0",
                type: "stole",
            })
            await db.Products.create({
                name: "Lenten Stole",
                description: "",
                price: 89.99,
                img1: "https://lh3.googleusercontent.com/pw/ACtC-3dkWRcKQ8WPGASaBO4LE5njfFkRHqoFNVPESEcAVrLLfr--pUQlHT-fY0rTyJxNvV_6SBpGmXZspXGB-kboop4uXT14XydoINf_KlK_0LT85KqOW_Y79zfI9SE13gzUNheqbOr5hum9SawTbP5tfpk=w360-h504-no?authuser=0",
                type: "stole",
            })
            await db.Products.create({
                name: "Pentecost Stole",
                description: "",
                price: 60.99,
                img1: "https://lh3.googleusercontent.com/pw/ACtC-3c0B_smrP2rO0oKZx_ri9Tffc12h0r7m2qL7T7fDdLNa26pANPm5RMQILYM0pR7XZy_c5e9TiVq_yTSgWjn3ghU8Hi2Vr5MgFNrOSam7uO1sFrwRmiTMlugDBXuws6xNXyzwz4EoxoMaKC7BoLM8XA=w223-h640-no?authuser=0",
                type: "stole",
            })
            await db.Products.create({
                name: "Advent Stole",
                description: "",
                price: 75.99,
                img1: "https://lh3.googleusercontent.com/pw/ACtC-3dP9rKhzI5mM3Rq38JVWqe8sou0EK6dAjNVXfz-yfZXDvCdl8VOo_zppxcUcggXB59N0fcaFN7ox60vIWIKrz9o-2yHcgcJeh-drS5Ho1O4EVmkcCxbYvce6l6ps56X6cPYKcX754xnTE7qfR-h0sU=w324-h504-no?authuser=0",
                type: "stole",
            })
            await db.Products.create({
                name: "Angel Banner",
                description: "",
                price: 135.95,
                img1: "https://lh3.googleusercontent.com/pw/ACtC-3cNGbUsIwctkDJ6RGJSrYHZGOQo4glebyjPGiPt5ts0kDpZ9YOBYtFviKtqwU3X2h0MdFc4EMlBBlYkj3D-16NiD6BUXtkONgiLJZFwSzHfqnN45dtBxyLNOegnhkJPlF265tT86SXOPxJqZaPa66I=w293-h500-no?authuser=0",
                type: "Banner",
            })

            db.Products.findAll({}).then(function (dbProducts) {
                res.json(dbProducts)
            })
        }
        else {
            db.Products.findAll({}).then(function (dbProducts) {
                res.json(dbProducts)
            })
        }
    })

    app.delete("/api/products/:id", function (req, res) {
        const id = req.params.id;
        db.Products.destroy({
            where: {
                id: id
            }
        }).then(function (dbProducts) {
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

    // app.get("/api/products/:subType", function (req, res) {
    //subType = req.params.subType
    //     db.Products.findAll({
    //         where: {
    //             sub-type: subType,
    //         }
    //     }).then(function (dbProducts) {
    //         res.json(dbProducts)
    //     })
    // })

    app.get("/api/products/banners", function (req, res) {
        db.Products.findAll({
            where: {
                type: "banner"
            }
        }).then(function (dbProducts) {
            res.json(dbProducts)
        })
    })

    app.post("/api/create", function (req, res) {
        console.log(req.body)
        const newPrice = req.body.price;
        const newImg1 = req.body.img1;
        const newType = req.body.type;
        const newName = req.body.name;
        const newDescription = req.body.description;

        db.Products.create({
            price: newPrice,
            img1: newImg1,
            type: newType,
            name: newName,
            description: newDescription
        })
            .then(newProduct => {
                res.json(newProduct)
            })
    })


    app.post('/api/login', passport.authenticate('local'), function (req, res) {
        db.User.findOne({
            where: {
                username: req.body.username,
            },
        }).then(function (user) {
            res.json(user);
        })
    })
    app.get('/api/check-authenticate', isAuthenticated, function (req, res) {
        res.json({ authed: true })
    })
    app.get('/api/logout', function (req, res) {
        req.logout();
        res.json({ authed: false })
    });

    app.post('/api/forgot-password', async function (req, res) {
        console.log(req.body.email);
        let email = await db.User.findOne({ where: { username: req.body.email} });
        if (email == null) {
            console.log("inentional null")
            return res.json({ status: 'ok' });
        }
        await db.Token.update({
            used: 1
        },
            {
                where: {
                    email: req.body.email
                }
            });
        //Create a random reset token
        let token = crypto.randomBytes(64).toString('base64');

        //token expires after one hour
        let expireDate = new Date();
        expireDate.setDate(expireDate.getDate());
        let hour = expireDate.getHours() + 1;
        expireDate.setHours(hour)
        console.log(expireDate)
        //insert token data into DB
        await db.Token.create({
            email: req.body.email,
            expiration: expireDate,
            token: token,
            used: 0
        });
        let transporter = nodemailer.createTransport({
            service: process.env.SENDER_SERVER,
            auth: {
              user: process.env.SENDER_ADDRESS,
              pass: process.env.SENDER_PASS
            }
          });
          
          let mailOptions = {
            from: process.env.SENDER_ADDRESS,
            to:  process.env.TEMP_EMAIL,
            subject: 'Password Reset Color for The Journey',
            text: 'To reset your password, please click the link below.\n\nhttps://'+process.env.DOMAIN+'reset-password/?token='+encodeURIComponent(token)+'&email='+req.body.email
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

        return res.json({ status: 'ok' });
    })


    app.put("/api/admin/products", function (req, res) {
        let product = req.body
        db.Products.update(product,
            {
                where: {
                    id: product.id
                }
            }
        ).then(function (updatedProduct) {
            res.json(updatedProduct)
        })
    })

}
