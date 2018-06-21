var express = require(`express`)
var bodyParser = require(`body-parser`)
var mysql = require('mysql');

var app = express();

app.use('/css',express.static( 'views/css'));
app.use(`/js`,express.static(`js`));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());



var con = mysql.createConnection({
  host: "10.10.10.10",
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

var a;
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = `SELECT * FROM Freezer`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        a = result;
        console.log(result);
      });
    });
  res.render(`index.ejs`, {freezer: a})
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
  console.log(username);
  console.log(password);
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `SELECT count(Customer.id) AS count FROM Customer WHERE user_name=\'`+ username + "\' AND password=\'"+ password+"\'";
    con.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      if(result[0].count == 1){
        res.redirect(`/index`);
      } else {
        console.log("Wrong login");
      }
    });
  });
});


console.log('8080 is the magic port');


function menuSQL(){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `SELECT * FROM Freezer`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      return result;
      console.log(result);
    });
  });
};
