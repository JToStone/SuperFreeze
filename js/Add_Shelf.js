var con = dbconnect();

var sql = "INSERT INTO Shelf (name,temperatur) Values ?";
var name = document.getElementById('name');
var temperatur = document.getElementById('temp');

var values =[name, temperatur];

con.query(sql, [Values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
