function dbconnect(){

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return con;
}
