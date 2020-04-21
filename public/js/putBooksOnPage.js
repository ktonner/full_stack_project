//const db = require("../models");
//$(document).ready(function () {
    // When the page loads, grab all of our books
    $.get("/api/all", function (data) {
       
    
        // if (data.length !== 0) {

        //     for (var i = 0; i < data.length; i++) {

                var row = $("<div>");
        //         //row.addClass("book");
                row.append("Hello")
        //         row.append("<p>" + data[i].title + "</p>");
        //         row.append("<p>" + data[i].author + "</p>");
        //         row.append ("<p>" + data[i].description + "</p>");   
        //         row.append ("<p>" + data[i].pages + "</p>");  
                $("#book").prepend(row);

        //     }

        // }

    });


//});