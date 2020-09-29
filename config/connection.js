var mysql = require("mysql");

var connection = mysql.createConnection({
  host: window.location.hostname,
  port: 3306,
  user: "root",
  password: "Wheat469",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;