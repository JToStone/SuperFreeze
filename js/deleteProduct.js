
function(){
    var mysql = require(`mysql`);
    
    var con = dbconnect();
    var currentSearchString = window.location.search;
    var sql = `DELETE FROM Product WHERE id=${currentSearchString}`;
    
    con.query(sql, function(err,result){
    if(err) throw err;
    
    console.log("Das ausgewählte Produkt wurde aus dem Fach entfernt.");
    
});
}





 var currentSearchString = window.location.search;







while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close; 