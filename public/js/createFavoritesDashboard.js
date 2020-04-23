$(document).on("click","#add", function(){

//get user ID
$.ajax({
    method: "GET",
    url: "/auth/user"
  }).then(function (user) {
    id = user.id;
    console.log(id)
            // Ask the server for the books from the table with this user
            console.log("running")
            $.get("/api/all/" + id, function (data) {
                console.log("Data should be here", data)

                if (data.length !== 0) {
                        i=(data.length-1)

                        var row = $("<div>");
                        //row.addClass("book");
                        row.append("<p>" + data[i].title + "</p>");
                        row.append("<p>" + data[i].author + "</p>");
                        row.append("<p>" + data[i].description + "</p>");
                        row.append("<p>" + data[i].pages + "</p>");
                        $("#display-favorites").append(row);
                        console.log("made it this far")
                    }

                })
            });
        })