let db = require("../models");
let passport = require('../config/passport')
module.exports = function (app) {

    app.get("/api/products", async function (req, res) {
       let dbProduct = await db.Products.findAll({})

            if(dbProduct[0] === undefined){

        await   db.Products.create({
                    name:"Rainbow Stole",
                    description: "Rainbow stole done in tie-dye",
                    price: 56.99,
                    img1: "https://lh3.googleusercontent.com/8PTtnOVa26FktHKM5BvVrqYevljxcnbV0TAPKG5qrEAz5DKOHfI6ZQim8yF5__QroaWgm2U40p-z68pqBvb7Rj6nqyLHi8I-dIjpFzIVqmxEtggvfrL-5wviS8LMAs8UoiYEKkc0tVAuw-dacIOYvGHn01vmoRjzrYLql7GBSovZ2aX21gCgfHjTKeLyFtJ6A81Nrch3o9_Xai9G8HPjxlcRD0__Vmikt4JccCycOizxyspaYyF16CxbMK6FeXtqk7nbmL4JQODKOZb4J_I0i3Sa5VvFIDTD2rh1Jc7uZE3b7DEDNhAs9B_zNogrBP71YvTfXRZg0DQLfvAhbJ-suYP5BEvTb8cHuCTHqQHCXNU0PouptkL_0RsFCkRfGyHpTISFjXzv1nuMPMpQLLrnbZ3l5Tsh0cR_5OJ_6Nqdp5mUjBGK1JkXbYIgca0lK3xx1uuj97AhHgcMtUo14KvlR4qskW7XkaDDFyuW0OWU8ETodNGKOpx5DV2VBriR9YdmGQ-GSDUP3e1gBlfr7DmEbroZJGgs9aDZrtlZWoe_zjrycQgmEV543u51ZUhnGpHe4LtnuNEz2bCARU-gN8UlBdSAERFqaOJZIrxkvSZQMSY3QKLjuuy0MNUhDgXGUo07YB2KzTHknZCVQkXsUlwv5cc7lu7_hiJDDgp-p7bPTH_Kt_D8trEktWsKBMs=w220-h640-no?authuser=0",
                    type: "Stole",
                })
          await db.Products.create({
                    name:"Easter Stole",
                    description: "Easter stole done in tie-dye",
                    price: 42.99,
                    img1: "https://lh3.googleusercontent.com/_RkEJpLZE92C9uQsQMPiwn5IUTwPiaKly9XiL3vsU2lpHAIKOtbNh-rogrBmlFaL6vxbmnBpfDBYSp1xrupfMDoVJ987qQ8YioNG8wYDYIjIEeqiJqDagE8YkOyXA9xJiqu9jaFNf_WPrmpymQojRb2_WRlihdBeDH7Bu0LOLt4kS19Hm8eE6BQEC9w786N8wuflOLfidARfLMWkbmd4Ue8icTe7rSIflIjrVkp-7ECd1jCgrJSVVjn3cLP7kluqfinuYGSmBvbVBW0TnCFHP-VUR65V4tT1xYjlh2ajVakO7ViDgYw3dkOKsex8nlYTrmep1xDXjof2RjTom0DrdfJmCu4SS6opi2V1oxIGjguaJLe6ruXgIYZHMbvpIvblb0esr0u-SK70ucmeTODDC7p1vjIJ3LFl3Yftf4C6tssNEWkm9XEuveijwl_jJNB2ysoem-Bicuq0_IyHM_bX3alRx4Xh2cbRXE5a2YoGIII3fm95jPHEZmxbMeXvAsALdwR7bqEW4wHck3iKKUfB_XJt9sbp7hEsI_r9nXzQS8K1hEP7WlsQyxobNF5am9806s6ZO_1OhiF5IUNBawcetSCpT3wwKnOIaxNKMSme6ml3Ml9SOFwBH6ioBGvSecPplFuYTOvORLh36EBZv8wXyrE_7aZMZ-7baj6TbVqvqzzyebmavKSICGMycJQ=w324-h500-no?authuser=0",
                    type: "Stole",
                })
           await db.Products.create({
                    name:"Christmas Stole",
                    description: "Christmas stole done in tie-dye",
                    price: 99.99,
                    img1: "https://lh3.googleusercontent.com/fAt0YtCn1Tzs6R60HaBokv4tjfOn_Mste8_wopxYYG9w5RdbNKEH2maDEFaspelMujbnhWD1wC3vtlUFCuSpwoMRFuFt0GFK1gZgLLj2q3stzWGsGouPCJKkoKJagD91JPHWEtbPMImPL8VJ9PTWTao28S2di4ptZsOj9jSbOCmqN_H-QdC8NamaxqGIcR58m_oS3FXTi4aJ5poaZV2Yl_SShv5eY0Ls8IPZjtYVhaLz__vVpERZRWCRRDOxoQzi4ftO-iR9wGqkCvUpXQdEedKL1v8rTYH5OwLFHmQT0aOI1dxaXYT72ifDA_kRoCpMQhNkRNYmul4rBKTbO0wCg_8DVEjiG0GpH8EsWGA_BgxlyvRJ-dCKuYFciKYabnLihY5IdUbEMiVT8dyk3sTGuDAzf_RE2KndaJoAw25M_otcn1ItwOkZ_yrP9dmkhmJ_I1HtlNbyf9gmg4dQ5Ge9FWKJ58OkpG8N3Jh80hIKhROpqoXVTX42i4Ydf_0p4C5ezAsXpMipFAGJmn4QjHe0BXeqigY4eKJb4U8woo1t4o9xGPrZ08dNggmFPk5tXhjbdx3QZ6CuZ5drHzuAXRRxBRAp3RK6_pX1jGK-hiWKRnF0QxN7eX57vKMWLxKv7f8mU0J3Txod6EZ2y8INytbWFZ4OIeZAFbIAuqIT-3QBP6ysTw7REi8KPcvy8PY=w324-h504-no?authuser=0",
                    type: "Stole",
                })
                await db.Products.create({
                    name:"Lenten Stole",
                    description: "",
                    price: 89.99,
                    img1: "https://lh3.googleusercontent.com/pVAkElIOs8BpiUQgo0Ww7qziWVMJhpnMcOAOgsr50km7K4BZMlW4hvxVRyT5qQbV4iaypAbzzIDsiteOSwDqEEmsqHdQwCLJyT26JZRNNJA5_cSNdmDU7pv_tFGFEel-KkQzuiS3SEzbZJ7jmXbfDbhTg6z33yGeANLwdkB55H359ZxTuvX_ST4jmLjV8mqLtmox9gLRoPCLbgq_xvJdrjpODbk0TZxpg7--HEboxtOb9hfB9H5dt1SeLMJMlJbap2G0bOm9fn2VPgRzVxeix9_pDiraz3LYkdKdVEoJGM81nXh3x9VLwC4pKhWEugvs-5hLo1lxXsqRJPAtdcJi2rRH5FUTTCiDRDhkRAEksGnRZh4aVEaSHmztfhB00HG4TYGdnaIkKLL1jkn8oYcwrRghS5KEWWA-1R_updZ_fmxVgSVAnk4RPH1r3oU1c4KGMwDbpARBFfzxRIBQnmB4U7fm784SDZvwKT36Hip8Cqbh_tjVIxwvBQlSS0X07WvzV9FwbZo8DNT30Cx_zhS8gzBh8Fhz0IdkAG99VdoQx-GoiV3KNAOwk_3ndrvXRNdlGHQXl6ODEJbzSyWI5DRfASH5XDPPgWrzVhGNriMrQGladONulnzP72vQ_Ci5HiMJ7tKwMuHhUmctv0xSdMujRG1SDqF5-xPWJ1-BoYgxjshpZtRTsad1L_ktuCw=w360-h504-no?authuser=0",
                    type: "stole",
                })
                await db.Products.create({
                    name:"Pentecost Stole",
                    description: "",
                    price: 60.99,
                    img1: "https://lh3.googleusercontent.com/GIFIOuLOOpI2SAFWi2qnZ30H2jV7o8NKBh34XAURS4r1kaQnQ5mzCLpEzDA5wcWbMZszjnhSB61h4Ulu6vtnamu82rECL3MleNjLgXesMIsKtPbZnOTicMEYXa22dWGjcTAL4-O0UIKHa8IIFZKjcqL5G1eVrTexCAPNNYNLgyBtcGN1sufJOjmPFgcOXARqP4YX2h6kDBzslR6pF0FXUaC55Ckc5QiwPBQKzIzs89hridPdMPFIsbDB9AZc_5EBmxhS3zUh7WC23se8ZDB6TUfW6mxaTnS1pY-V3piy_zsGpaLWeDSg_MjpvFtvWG1dHqUJ_8VTAEOY7Wpou72z64p-wwB1V0rNcNFoU5Xzedsg_wgKU24MefJw3l5OMBvz6VWBIqdFtiqC7Jco94uKWFNnGlho7UgBBGGhZRFbSmdhkdXqAcvKeBlTQsFDdzRlB8A0fildp6Q3PNHdFt31oqUP2MKz7K4jni0OOfoSBRFzsla3ChI8-2XBbRK9_2SJ2PN816UFhEmDYncVwB_xjTR4TbOY2jIQFVwp8I8ZLS2izbcY_LZOa1tscDHSsbWh8Kf0yqxd6GVSC882kS3pWckUp7zY7WDgp8QVGvS12jFhJ7UufMf6Xh45bJgzStQds96WCKpYItCtxR6ymQlmqjWFXoHwL5il7JqnBd9sHenjMIIGm6TF-m-s8Io=w223-h640-no?authuser=0",
                    type: "stole",
                })
                await db.Products.create({
                    name:"Advent Stole",
                    description: "",
                    price: 75.99,
                    img1: "https://lh3.googleusercontent.com/5jDx5wLyMLoMllUL8H8tVBh6qX-lW2o1zSXU7fOG818T61KHV8uW2JiWfGdVIkrh8QPh27yb4nxAEd0DDM5kRL1RiCSJWdjHrZ3e_6nOI0FIep-kbvJGuP-Fch5z5d-66Q26E-GcTWrpw__wtyPti-btsGM51GXK4P__kTXZbI6Q3MJbx2Os2iFNKf_wnbod9dQMTEOwWilVuRhyHNelQCDFM--OYr1jewEIFBTPdNHQ2HiPH6p9eZCV2tPzNX0SGN_7-3JXfsnruCDHUrgamikrH1YQ9xSicCPIwXYio54WhIDhi3bCwzWpZs2uph9RfHWY5deJm0oOejHNPqJeDC3D6RIPBZ1HVqXRasq4QbjlFsISTzZdN-U0FVWfg5Wt7dr0D0WAWH_PpLxBY7CXe-Dpy8sd4UBlNs_6b3sxGGQJaoIYZyzP64gZ7JQhVs7aiVxTgznzkjnAXiZAtCdNjQPfcSL0T1IIN4_lC7lbqWvnUp25u3p7S18VGShaVo0sLWzNBNy5oPnmR255oAoHRG8QmYM5fmgVovZGHcvv-xkG-h1uP7xUe9ote4wQiVQwCexhjKhTncHfcW-cjvsbHIFUuFk7XsSfBQoUmF7u0lhR1AvnJQ4GIPVrxXefE9ksqnx7TS9d-_l-6m77vgx-Od7PDV3F4iV6RGMjTCdA0HF8RI-A92v_UwVyeIw=w324-h504-no?authuser=0",
                    type: "stole",
                })
                await db.Products.create({
                    name:"Angel Banner",
                    description: "",
                    price: 135.95,
                    img1: "https://lh3.googleusercontent.com/O2SmjJq_7URvS-ALQHIHoTAwvHqNMyeBppLS91JCqDCQihea920aASGQxI_paPJDFzZKSZs4RVcXa37nUpA6Fe5kc3XZ__AtsrOjgFcNhR8v6IaIl9YFCC3RqO5ruYavx5ru51x2NVEH_0ui1VroqoC9Se0TPbcpOyPZV7AMZO7o4XFICa58vbRzSCMl8mYSPnduqU8jH2vz9Sq93Jp7gBOUgnK4m_kWFguudB4cYwAx8IEwGfWlyjUVjmAZe4cc4iE2D7r2Y05bpX7Tsxl3thliHfuC9mq1ot-VBPgUF0p7vSUA_gAgxYokgD05hWiNYZEcEBRLosKSsob2KjtzAO4fVeFbjGJr8g3eXjDKldxTAAgFSXp_A5ve7UE_bjv6EnVaNyANxzavS5b-B0T-YHE3APPYjUEJmK-FDG7cto-aTZ05RXTAy2O13pLX-gc5WEL3LJXpn2ffDuMDhA8ycdzPDJH5PpQ_D7K76uY5m7TqT2FXbQNT2pxCYTsncvpkeDESoPvfmSfJYQbrEz2CDSkxAh1yEbyjQHaT1rE0769mf3raz3p1LXUB4UKSjyPytNqrYSpiLaIbsRJo16KpBvPVP-jtAYjwJL9v5heVNjFRbMz5-MU5EozPhFCyKippeVvk-Hp4CiKlwTIhdWq5m1OoGuY3RJtSM0QY_ON3EVuqeTMW16D7cPkko6c=w293-h500-no?authuser=0",
                    type: "Banner",
                })
               
                db.Products.findAll({}).then(function (dbProducts) {
                    res.json(dbProducts)
                })      
            }
            else{ db.Products.findAll({}).then(function (dbProducts) {
                res.json(dbProducts)
            }) }
           
        
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

    app.post("/api/admin", function (req, res) {
        db.Products.create({
            // description:
            // price:
            // img1:
            // type:
            // img2:
            // img3:
        })
    })

    app.put("/api/admin", function (req, res) {
        db.Products.update({
            //update products
        })
    })

    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        console.log(req.body.email)
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

    app.post("/api/addOrder", function (req, res) {
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

    app.patch("/api/updateOrder/:id", function (req, res) {
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

    app.patch("/api/removeOrder/:id", function (req, res) {
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
