$("#search").on("click", function () {
    $("#main-book").empty()
    var search = $("#searchbar").val().toLowerCase().trim()
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + search;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response) 

        // Creating a div to hold the book
        var bookDiv = $("<div class='book'>");
        // Storing the title data
        var title = response.items[0].volumeInfo.title;
        // Creating an element to have the title displayed
        var pOne = $("<p>").text("Title: " + title);
        // Displaying the rating
        bookDiv.append(pOne);

        // Storing the release year
        var author = response.items[0].volumeInfo.authors;
        // Creating an element to hold the release year
        var pTwo = $("<p>").text("Released: " + author);
        // Displaying the release year
        bookDiv.append(pTwo);

        // // Storing the plot
        // var description = response.items[0].volumeInfo.description;

        // // Creating an element to hold the plot
        // var pThree = $("<p>").text("Plot: " + description);

        // // Appending the plot
        // bookDiv.append(pThree);

        // Retrieving the URL for the image
        var imgURL = response.items[0].volumeInfo.imageLinks.smallThumbnail
        // Creating an element to hold the image
        var image = $("<img>").attr("src", imgURL);
        // Appending the image
        bookDiv.append(image);

        var addFav = $("<button>").text("Add to Favorites")
        bookDiv.append(addFav)

        // Putting the entire movie above the previous movies
        $("#main-book").prepend(bookDiv)

        // }      

        // for(i = 0; i < response.items.length; i++) {
        //     var tRow = $("<tr>")

        //     var titleTd = $("<td>").text(response.items[i].volumeInfo.title)
        //     var authorTd = $("<td>").text(response.items[i].volumeInfo.authors)
        //     var authorTd = $("<td>").text(response.items[i].)

        //     console.log(titleTd)
        //     console.log(authorTd)

        //     tRow.append(titleTd, authorTd, pgnumberTd)

        //     $("tbody").append(tRow)
        // }
    })
})