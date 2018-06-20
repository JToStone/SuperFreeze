function login() {
  var mysql = require('mysql');

  var username = document.getElementById('username').value;
  var password = CryptoJs.SHA512(document.getElementById('pwd').value);

var con = dbconnect();
var sql = `SELECT count(customer.id) AS count FROM customer WHERE password=${username} AND username=${password}`;
con.query(sql,function(err, result){
    if(err) throw err;
    if (result == 1) {
      window.sessionStorage.setItem(loggedIn,true);
      console.log("Logged In");
      window.location.href("index.html");
    } else {
      console.log("Not Logged In");
    }
});
};
