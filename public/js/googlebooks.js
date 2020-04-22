$("#search").on("click", function () {
  $("#display-case").empty()
  var search = $("#searchbar").val().toLowerCase().trim()
  var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + search;
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
      console.log(response) 

      //hook into the display case
      var display = $("#display-case")
      //loop over all results
      for(i = 0; i < response.items.length; i++) {

          //individual variable for each book info
          var element = response.items[i]
          var title = element.volumeInfo.title;
          var author = element.volumeInfo.authors;
           //var imgURL = response.items[i].volumeInfo.imageLinks.smallThumbnail

          var card = `
          <div class="card">
          <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="#" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                      <p class="title is-4">${title}</p>
                      <p class="subtitle is-6">${author}</p>
                    </div>
          `
          display.append(card)
      }
  })
})
      
      // Creating a card div to hold the book
      // var bookDiv = $("<div class='book'>");
      // // Storing the title data
     
      // // Creating an element to have the title displayed
      // var pOne = $("<p>").text("Title: " + title);
      // // Displaying the rating
      // bookDiv.append(pOne);

      // // Storing the release year
      // var author = response.items[0].volumeInfo.authors;
      // // Creating an element to hold the release year
      // var pTwo = $("<p>").text("Released: " + author);
      // // Displaying the release year
      // bookDiv.append(pTwo);

      // // // Storing the plot
      // // var description = response.items[0].volumeInfo.description;

      // // // Creating an element to hold the plot
      // // var pThree = $("<p>").text("Plot: " + description);

      // // // Appending the plot
      // // bookDiv.append(pThree);

      // // Retrieving the URL for the image
      // var imgURL = response.items[0].volumeInfo.imageLinks.smallThumbnail
      // // Creating an element to hold the image
      // var image = $("<img>").attr("src", imgURL);
      // // Appending the image
      // bookDiv.append(image);

      // var addFav = $("<button>").text("Add to Favorites")
      // bookDiv.append(addFav)

      // // Putting the entire movie above the previous movies
      // $("#main-book").prepend(bookDiv)

  

      
      //     var tRow = $("<tr>")

      //     var titleTd = $("<td>").text(response.items[i].volumeInfo.title)
      //     var authorTd = $("<td>").text(response.items[i].volumeInfo.authors)
      //     var authorTd = $("<td>").text(response.items[i].)

      //     console.log(titleTd)
      //     console.log(authorTd)

      //     tRow.append(titleTd, authorTd, pgnumberTd)

      //     $("tbody").append(tRow)
      // }
