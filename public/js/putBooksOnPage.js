
$(document).ready(function () {
        // Get the user information
        $.ajax({
                method: "GET",
                url: "/auth/user"
        }).then(function (user) {
                // Put use information on the page
                console.log("This should be", user)
                var row = $("<div>");
                
                row.append("<p>" + user.id + "</p>");
                row.append("<p>" + user.email + "</p>");
                
                $(".profile").append(row);
                // Go get all the books for this user
                getUserBooks(user.id);
                

        })
        // Reuseable function to get all the user books
        function getUserBooks(id) {
        // Ask the server for the books from the table with this user
        $.get("/api/all/" + id, function (data) {
                console.log("Data should be here", data)
                
                if (data.length !== 0) {

                        for (var i = 0; i < data.length; i++) {

                                var row = $("<div>");
                                //row.addClass("book");
                                row.append("<p>" + data[i].title + "</p>");
                                row.append("<p>" + data[i].author + "</p>");
                                row.append("<p>" + data[i].description + "</p>");
                                row.append("<p>" + data[i].pages + "</p>");
                                $("#book").prepend(row);

                        }

                }
        });
}
       

});