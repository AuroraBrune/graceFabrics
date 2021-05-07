let db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
let passport = require('../config/passport');
let crypto = require('crypto');
let bcrypt = require("bcryptjs");
let nodemailer = require('nodemailer');
const path = require("path");
const fs = require("fs");
const multer = require("multer");
let dotenv = require('dotenv');
dotenv.config();
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {
    app.post('/create-checkout-session', async function (req, res) {
        let items = req.body
        const lineItems = await items.map(item => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [item.img1],
                        // 'http://localhost:3000/' +
                    },
                    unit_amount: item.price,
                },
                quantity: 1,
            }
        })
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/#/checkout?success=true',
            cancel_url: 'http://localhost:3000/#/checkout?canceled=true',
        });
        res.json({ id: session.id });
    });
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    });

    let uploads = multer({ storage });

    app.post("/api/upload", uploads.single('image'), async (req, res) => {
        let image = req.file.path;
        res.json({ msg: 'image successfully created' })
    })

    app.get("/api/images", (req, res) => {
        let uploadsDirectory = path.join('uploads')
        fs.readdir(uploadsDirectory, (err, files) => {
            if (err) {
                return res.json({ msg: err })
            }

            if (files.length === 0) {
                return res.json({ msg: "No Images Uploaded!" })
            }

            return res.json({ files })
        })
    })

    app.get("/api/products", async function (req, res) {
        let dbProduct = await db.Products.findAll({})
        res.json(dbProduct)
    })

    app.post("/api/delete", (req, res) => {
        const id = req.body.id;
        fs.unlink('./uploads/' + req.body.img1, (err) => {
            if (err) {
                console.log(err)
            }
        });
        db.Products.destroy({
            where: {
                id: id
            }
        }).then(dbProducts => {
            res.json(dbProducts)

        });
    })
    app.get("/api/products/stoles", (req, res) => {
        db.Products.findAll({
            where: {
                type: "stole"
            }
        }).then(dbProducts => {
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

    app.get("/api/products/banners", (req, res) => {
        db.Products.findAll({
            where: {
                type: "banner"
            }
        }).then(dbProducts => {
            res.json(dbProducts)
        })
    })

    app.post("/api/create", (req, res) => {
        const { name, type, price, description, img1 } = req.body
        db.Products.create({
            price: price,
            img1: img1,
            type: type,
            name: name,
            description: description
        })
            .then(newProduct => {
                res.json(newProduct)
            })
    })


    app.post('/api/login', passport.authenticate('local'), (req, res) => {
        db.User.findOne({
            where: {
                username: req.body.username,
            },
        }).then(user => {
            res.json(user);
        })
    })
    app.get('/api/check-authenticate', isAuthenticated, (req, res) => {
        res.json({ authed: true })
    })
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.json({ authed: false })
    });

    app.post('/api/forgot-password', async function (req, res) {
        let email = await db.User.findOne({ where: { username: req.body.email } });
        if (email == null) {
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

        //insert token data into DB
        await db.Token.create({
            email: req.body.email,
            expiration: expireDate,
            token: token,
            used: 0
        });
        //set up nodemailer
        let transporter = nodemailer.createTransport({
            service: process.env.SENDER_SERVER,
            auth: {
                user: process.env.SENDER_ADDRESS,
                pass: process.env.SENDER_PASS
            }
        });
        //body of email
        let mailOptions = {
            from: process.env.SENDER_ADDRESS,
            //req.body.env
            to: process.env.TEMP_EMAIL,
            subject: 'Password Reset Color for The Journey',
            text: 'Hi Grace, To reset your password, please click the link below.\n\nhttps://' + process.env.DOMAIN + 'reset-password/?token=' + encodeURIComponent(token) + '&email=' + req.body.email
        };
        //sends email
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        process.on('uncaughtException', err => {
            console.log(err);
        });

        return res.json({ status: 'ok' });
    })

    app.post('/api/reset-password', async function (req, res) {
        //deletes any tokens that are not from today
        await db.Token.destroy({
            where: {
                expiration: { [Op.lt]: Sequelize.fn('CURDATE') },
            }
        });

        //find a token that matches the email, token and is not expired
        let record = await db.Token.findOne({
            where: {
                email: req.body.email,
                expiration: { [Op.gt]: Sequelize.fn('CURDATE') },
                token: req.body.token,
                used: 0
            }
        });
        //error message if not found
        if (record == null) {
            return res.json({
                message: 'Token has expired. Please try password reset again.',
                showForm: false
            });
        }
        //send info about that token to the browser
        return res.json({
            showForm: true,
            record: record
        })
    })

    app.post('/api/update-password', async function (req, res) {
        let user = req.body.userRecord
        //checks to make sure the token has not expired
        let record = await db.Token.findOne({
            where: {
                email: user.email,
                expiration: { [Op.gt]: Sequelize.fn('CURDATE') },
                token: user.token,
                used: 0
            }
        });
        //sends an error message if no token is found
        if (record == null) {
            return res.json({ status: 'error', message: 'Token not found. Please try the reset password process again.' });
        }
        //updates the token to show it has been used
        await db.Token.update({
            used: 1
        },
            {
                where: {
                    email: user.email
                }
            });
        //hashes new password
        let newPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null);
        //updates the password for the associated user
        await db.User.update({
            password: newPassword
        }, {
            where: {
                username: user.email
            }
        });
        return res.json({ status: 'ok', message: 'Password reset. Please login with your new password.' });
    })

    app.put("/api/admin/products", (req, res) => {
        let product = req.body
        db.Products.update(product,
            {
                where: {
                    id: product.id
                }
            }
        ).then(updatedProduct => {
            res.json(updatedProduct)
        })
    })

}
