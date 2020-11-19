const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const db = require("./models")
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD

// Requiring our models for syncing
var db = require("./models");

=======
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lm4d4g5khk0xcw63',
    database: '0ot6rpxbpe5587z'
  })
}
>>>>>>> main
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, './gracefabrics/build')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './gracefabrics/build', 'index.html'));
  });
}


app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Add routes
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
<<<<<<< HEAD
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
=======
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
>>>>>>> main
