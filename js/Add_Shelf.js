
function addsehlfs(){

var con = dbconnect();
var name = document.getElementById(`name`).value;
var temperatur = document.getElementById(`temp`).value;

var sql = `INSERT INTO Shelf (name,temperatur) Values (${name}, ${temperatur})`;


con.query(sql, function (err, result){

});
};
