module.exports = function(sequelize, DataTypes) {
    const Token = sequelize.define("Token", {
      email: {
        type: DataTypes.STRING(250),
      },
      experiation: {
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
return Token;
}