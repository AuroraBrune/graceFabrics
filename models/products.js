module.exports = function(sequelize, DataTypes){
    let Products = sequelize.define("Product", {
        type: {
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
            type: DataTypes.NUMBER,
            allowNull: false,
        }
    })
    return Products
}