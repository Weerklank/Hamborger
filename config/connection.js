var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.MYSQL_URL || "localhost",
  port: process.env.PORT || 3306,
  user: "root",
  password: process.env.MYSQL_PASSWORD || "",
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
