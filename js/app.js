var express = require(`express`)

var app = express();

app.get(`/login`,function(req,res){
  res.render(`login.ejs`);
})
.get(`/`, function(req,res){
  res.redirect(`/login`);
})
.listen(3000);
