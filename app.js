var express = require(`express`)
var bodyParser = require(`body-parser`)
var mysql = require('mysql');

var app = express();

app.use('/css',express.static( 'views/css'));
app.use(`/js`,express.static(`js`));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());



var con = mysql.createConnection({
  host: "10.10.10.102",
  user: "superfreezer",
  password: "asdf",
  database: "superfreezer"
});

app.get(`/login`,function(req,res){
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

app.post(`/login`, function(req, res){
  var username = req.body.username;
  var password = req.body.password;

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `SELECT count(Customer.id) AS count FROM Customer WHERE password=${username} AND username=${password}`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      if(result == 1){
        res.redirect(`index.ejs`);
      } else {
        console.log("Wrong login");
      }
    });
  });
})





console.log('8080 is the magic port');
