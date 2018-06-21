var express = require(`express`)

var app = express();
app.use('/css',express.static( 'views/css'));
app.use(`/js`,express.static(`js`));

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
console.log('8080 is the magic port');
