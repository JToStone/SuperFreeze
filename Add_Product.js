
var con = dbconnect();


  var sql = "INSERT INTO Product (name) VALUES ?";
  var values = document.getElementById('product_name');
  var shelf = document.getElementById('product_shelf');
  var exdate = document. getElementById('product_date');


  con.query(sql, [values] [shelf] [exdate], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
