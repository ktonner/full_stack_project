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
    for (i = 0; i < response.items.length; i++) {

      //individual variable for each book info
      //JAMES, this is where it can't seem to reach the image or description?
      var element = response.items[i]
      var title = element.volumeInfo.title;
      var author = element.volumeInfo.authors;
      var desc = element.volumeInfo.description;
      if (!desc) {
        desc = "No description available"
      }
      var imgURL = response.items[i].volumeInfo.imageLinks.smallThumbnail;
      var pages = response.items[i].volumeInfo.pageCount;
      var card = `
          <div class="card">
          <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-60x60">
                      <img src="${imgURL}" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                      <p class="title is-4">${title}</p>
                      <p class="subtitle is-6">${author}</p>
                      <p><button class="button" data-title="${title}" data-author="${author}" data-page="${pages}" id="add">Add favorite</button></p>
                      <br>
                      <div class="content">
                      ${desc} 
                      </div>
                    </div>
                </div>
            </div>
          </div>
        
          <hr>
          `
      display.append(card)
    }

  })

})
