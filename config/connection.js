var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: process.env.MYSQL_HOST || "us-cdbr-east-02.cleardb.com",
//   port: process.env.PORT || 3000,
//   user: process.env.MYSQL_USERNAME || "b9e079a0cf7bc4",
//   password: process.env.MYSQL_PASSWORD || "b4317ad9",
//   database: process.env.MYSQL_DATABASE || "heroku_d89b69fad187ac2"
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.PORT || 3000,
    user: process.env.MYSQL_USERNAME || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "hamburger_db"
  })
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
