var express = require(`express`)
var bodyParser = require(`body-parser`)
var mysql = require('mysql');

var app = express();

app.use('/css',express.static(__dirname + '/views/css'));
app.use(`/js`,express.static(__dirname + `/js`));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


/*var con = mysql.createConnection({
  host: "10.10.10.11",
  user: "superfreezer",
  password: "asdf",
  database: "superfreezer"
});*/

app.get(`/login`,function(req,res){
  res.render(`login.ejs`);

})
.get(`/`, function(req,res){
  res.redirect(`/login`);
})
.get(`/index`, function(req,res){

    var sql = `SELECT f1.name AS Freezer, s1.name AS Shelf, s1.id AS id FROM Freezer AS f1 LEFT JOIN Shelf AS s1 ON (s1.Freezer_id=f1.id) ORDER BY f1.name ASC, s1.id ASC;`;
    mysql_query_render(sql, `index.ejs`, res);

})
.get(`/addFreezer`, function(req,res){
    var sql = `SELECT f1.name AS Freezer, s1.name AS Shelf, s1.id AS id FROM Freezer AS f1 LEFT JOIN Shelf AS s1 ON (s1.Freezer_id=f1.id) ORDER BY f1.name ASC, s1.id ASC;`;
    mysql_query_render(sql, `freezer.ejs`, res);
})
.get(`/config`, function(req,res){
    var sql = `SELECT f1.name AS Freezer, s1.name AS Shelf, s1.id AS id FROM Freezer AS f1 LEFT JOIN Shelf AS s1 ON (s1.Freezer_id=f1.id) ORDER BY f1.name ASC, s1.id ASC;`;
    mysql_query_render(sql, `configuration.ejs`, res);
})
.get(`/config/:shelf_id`, function(req,res){

  var con = mysql_con();
  var sql = `SELECT f1.name AS Freezer, s1.name AS Shelf, s1.id AS id FROM Freezer AS f1 LEFT JOIN Shelf AS s1 ON (s1.Freezer_id=f1.id) ORDER BY f1.name ASC, s1.id ASC;`;


    var sql = `SELECT f1.name AS Freezer, s1.name AS Shelf, s1.id AS id FROM Freezer AS f1 LEFT JOIN Shelf AS s1 ON (s1.Freezer_id=f1.id) ORDER BY f1.name ASC, s1.id ASC;`;
    var con = mysql_con();

    con.connect(function(err) {
      if (err) throw err;
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.render('configuration.ejs', { result: result, shelf_id: req.params.shelf_id});
      });
    });

})
.get(`/product`, function(req,res){
    var sql = `SELECT f1.name AS Freezer, s1.name AS Shelf, s1.id AS id FROM Freezer AS f1 LEFT JOIN Shelf AS s1 ON (s1.Freezer_id=f1.id) ORDER BY f1.name ASC, s1.id ASC;`;
    mysql_query_render(sql, `product.ejs`, res);
})
.listen(8080);

app.post(`/login`, function(req, res){
  var username = req.body.username;
  var md5 = require('md5');
  var password = md5(req.body.password);
  console.log(username);
  console.log(password);
  var con = mysql_con();
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
        res.redirect(`/login`);
        console.log("Wrong login");
      }
    });
  });
});

app.post(`/config/:shelf_id`, function(req, res){
  var name = req.body.name;
  var temperature = req.body.temperature;
  var selected_shelf = req.params.shelf_id;
  con = mysql_con();
  con.connect(function(err) {
    if (err) throw err;
    var sql = ``;
    if(req.body.shelf == "delete"){
      sql = `DELETE FROM Shelf WHERE id=\'`+ selected_shelf+"\'";
    }
    if(req.body.shelf == "update"){
      sql = `UPDATE Shelf SET name=\'`+ name + "\', temperature=\'"+ temperature+"\' WHERE id=\'"+ selected_shelf+"\'";
    }

    con.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
        res.redirect(`/index`);
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

function mysql_con () {

    var con = mysql.createConnection({
      host: "10.10.10.11",
      user: "superfreezer",
      password: "asdf",
      database: "superfreezer"
    });

    return con;
}

function mysql_query_render(sql, page, res) {
    var con = mysql_con();

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.render(page, { result: result});
      });
    });
}

function mysql_query(sql) {
    var con = mysql_con();

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(Done);
      });
    });
}
