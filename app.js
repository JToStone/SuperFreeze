var express = require(`express`)

var app = express();
app.use('/css',express.static( 'views/css'));

app.get(`/login`,function(req,res){
  res.render(`login.ejs`);
})

.get(`/`, function(req,res){
  res.redirect(`/login`);
})
.listen(8080);
console.log('8080 is the magic port');