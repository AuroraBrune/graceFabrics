module.exports = function(sequelize, DataTypes){
    let Orders = sequelize.define("Orders", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        orderDescr:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        orderPrice:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        active:{
            type: DataTypes.TINYINT,
            allowNull: false,
            default: 1,
        }, 
    })
    return Orders
}
