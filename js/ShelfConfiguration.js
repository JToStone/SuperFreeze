



function(){
    var mysql = require(`mysql`);
    
    var con = dbconnect();
    var currentSearchString = window.location.search;
    
    var name = document.getElementById("shelf_name").value;
    var temp = document.getElementById("temperature").value;
    
var sql = `UPDATE  Shelf SET name=${name}, temperature=${temp} WHERE id=${currentSearchString}`;
    
    con.query(sql, function(err,result){
    if(err) throw err;
    
    console.log("Das Fach"+ shelf_name + "wurde mit " + temp+ "eingestellt.");
    
});
}


while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close; 