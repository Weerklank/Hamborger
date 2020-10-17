var mysql = require("mysql");

var connection = process.env.createConnection || mysql.createConnection({
  host: process.env.MYSQL_URL || "localhost",
  port: process.env.PORT || 3306,
  user: process.env.MYSQL_USERNAME || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
