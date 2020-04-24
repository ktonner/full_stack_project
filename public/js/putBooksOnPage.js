
$(document).ready(function () {
        // Get the user information
        $.ajax({
                method: "GET",
                url: "/auth/user"
        }).then(function (user) {
                // Put use information on the page
                var row = $("<div>");

                row.append("<p>" + "Your ID number: " + user.id + "</p>");
                row.append("<p>" + "Your email address: " + user.email + "</p>");

                $(".profile").append(row);
                // Go get all the books for this user
                getUserBooks(user.id);


        })
        // Reuseable function to get all the user books
        function getUserBooks(id) {
                // Ask the server for the books from the table with this user
                $.get("/api/all/" + id, function (data) {

                        if (data.length !== 0) {

                                for (var i = 0; i < data.length; i++) {
                                        
                                        var row = $("<div class='card'>");

                                        row.append("<p class='card-header-title'>" + data[i].title + "</p>");
                                        row.append("<p class='author-content'>" + data[i].author + "</p>" + "<br>");
                                        row.append("<p class='content'>" + data[i].description + "</p>");
                                        row.append("<p class='content'>Number of pages: " + data[i].pages + "</p>" + "<hr>");
                                        $(".card-header-title").attr("style", "font-size: 30px; margin-left: 15px;");
                                        $(".author-content").attr("style", "color: hotpink; margin-left: 30px; font-weight: bold;");
                                        $(".content").attr("style", "font-size: 20px; margin-left: 30px;");
                                        $(".card").attr("style", "background-color: rgb(200, 228, 226);");


                                        $("#book").prepend(row);

                                }

                        }
                });
        }


});