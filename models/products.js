module.exports = function(sequelize, DataTypes){
    let Products = sequelize.define("Products", {
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        img1:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        img2:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        img3:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
        if(Products === null || undefined){
        Products.create({
            name:"Rainbow Stole",
            type: "Stole",
            description: "Rainbow stole done in tie-dye",
            price: 56.99,
            img1: "stole picture",
        })
    
        Products.create({
            name:"Easter Stole",
            description: "easter stole done in tie-dye",
            price: 40,
            img1: "stole picture",
            type: "Easter-Stole",
        })
        
        Products.create({
            name:"Christmas Stole",
            description: "christmas stole done in tie-dye",
            price: 40,
            img1: "stole picture",
            type: "Christmas-Stole",
        })
    }
    
   
    return Products
}