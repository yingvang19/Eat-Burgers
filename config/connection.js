// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "kq2npu2ju4peoy3s",
  password: "r8mz1i0c1psuf274",
  database: "kcikby46oa29k7ph"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
