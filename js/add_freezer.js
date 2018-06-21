function add_freezer(){

  var name = document.getElementById(`name`).value;
  var type = document.getElementById(`type`).value;
  var shelfs = document.getElementById(`shelfs`).value;

  var con = dbconnect();

  var sql = `INSERT INTO freezer(name, Type_id, Customer_id) VALUES (${name},${type},)`;

  con.query(sql, function(err, result){

  });

};
