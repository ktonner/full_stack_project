$(document).on("click","#add", saveData);
function saveData(event) {
  event.preventDefault();
  //switch button class so not clicked on again
  $(this).addClass("is-disabled is-link").attr("disabled", "true").html("Favorited")
  // Constructing a newBook object to hand to the database
  var title1 = $(this).attr("data-title");
  var author1 = $(this).attr("data-author");
  var description1 = $(this).parent().siblings(".content").text().trim()
  var page1 =  $(this).attr("data-page");

  // Create Book to save
  var newBook = {
    title: title1,
    author: author1,
    description: description1,
    pages: page1
  };
  
  $.ajax({
    method: "GET",
    url: "/auth/user"
  }).then(function (user) {
    newBook.UserId = user.id;
    console.log(newBook);
    //catch for duplicates
    $.ajax({
      method: "POST",
      url: "/api/book",
      data: newBook
    }).then(function (data){
      console.log(data)
      var row = $("<div class='card'>");
      //row.addClass("book");
      row.append("<p class='title is-4'>" + data.title + "</p>");
      row.append("<p class='subtitle is-6'>" + data.author + "</p>");
      row.append("<p class='content'>" + "Pages: " + data.pages + "</p>");
      $("#display-favorites").append(row);
      console.log("made it this far")
    })
  })}
