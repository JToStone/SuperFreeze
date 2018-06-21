var freezerSQL = "SELECT * FROM Freezer WHERE customer_id = 1";

// counting results
var freezerCount;
var shelfCount;
// resultsets
var freezerResult;
var shelfResult;

var freezerName;
var shelfName;

var html;


for (i = 0; i < freezerCount; i++) {
    // TODO freezerName = "1";
    html += "<li class='treeview'>";
    html += "<a href='#'><span> " + freezerName + "</span>";
    html += "<span class='pull-right-container'>";
    html += "<i class='fa fa-angle-left pull-right'>";
    html += "</i></span></a>";

    html += "<ul class='treeview-menu'>";
    html += "<li class='treeview'>";
    html += "<a href='#'>Configuration<span class='pull-right-container'>";
    html += "<i class='fa fa-angle-left pull-right'></i></span></a>";
    html += "<ul class='treeview-menu'>";

    var shelfSQL = "SELECT * FROM shelf WHERE Freezer_id = " + freezerResult[i].id;

    for (i = 0; i < shelfCount; i++) {
        // TODO shelfName = "1";
        html += "<li><a href='#'> " + shelfName + "</a></li>";
    }

    html += "<li><a href='#'><i class='fa fa-plus'></i> Create Shelf</a></li></ul></li>";
    html += "<li><a href='#'> Products</a></li></ul></li>";
}
