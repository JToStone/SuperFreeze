function dbconnect(){

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.22.10.105",
  user: "superfreezer",
  password: "asdf",
  database: "superfreezer"
});
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return con;
}
