function add_product(){
  var con = dbconnect();

  var sql = "INSERT INTO Product (shelf, name, exdate) Values ?";
  var shelf = document.getElementById('product_shelf');
  var name = document.getElementById('product_name');
  var exdate = document.getElementById('datepicker');

  var values =[shelf, name, exdate];

  con.query(sql, [Values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
};
