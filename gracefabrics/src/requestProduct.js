var sql = require("mssql");
var express = require('express');
var app = express();
// config for  database
var config = {
    username: 'root',
    password: 'Lucadenby23$',
    server: 'localhost', 
    database: 'gracefabrics' 
};

const requestProduct = async () => {
try {
        const pool = await sql.connect(config);
        const sqlQuery = 'SELECT * FROM Products';
        const result = await pool.request().query(sqlQuery);
        return result.recordset;
    } catch (err) {
        throw err;
    }
};

exports.requestProduct = requestProduct;