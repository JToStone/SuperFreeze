var express = require(`express`)

var app = express();
app.use('/css',express.static( 'views/css'));
app.use(`/js`,express.static(`js`));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "10.10.10.102",
  user: "superfreezer",
  password: "asdf",
  database: "superfreezer"
});

app.get(`/login`,function(req,res){



  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `SELECT count(customer.id) AS count FROM customer WHERE password=${username} AND username=${password}``;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });


  res.render(`login.ejs`);

})
.get(`/`, function(req,res){
  res.redirect(`/login`);
})
.get(`/index`, function(req,res){


  res.render(`index.ejs`);
})
.get(`/addFreezer`, function(req,res){
  res.render(`freezer.ejs`);
})
.get(`/config`, function(req,res){
  res.render(`configuration.ejs`);
})
.get(`/product`, function(req,res){
  res.render(`product.ejs`);
})
.listen(8080);
console.log('8080 is the magic port');
