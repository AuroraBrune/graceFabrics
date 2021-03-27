module.exports = function(sequelize, DataTypes) {
    const ResetToken = sequelize.define("Token", {
      email: {
        type: DataTypes.STRING(250),
      },
      expiration: {
        type: DataTypes.DATE, 
      },
      token: {
        type: DataTypes.STRING(250),
      },
      used:{
         type: DataTypes.INTEGER(11),
         allowNull: false,
         default: 0
      }

    });
return ResetToken;
}