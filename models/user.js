import Sequelize from 'sequelize';
var bcrypt = require("bcrypt-nodejs");
import connection from '../config/db' //(need to set this up still)

module.exports = function(sequelize, DataTypes) {

let User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        field: 'username'
    },
    password: DataTypes.STRING,
});

User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
    return User;
}