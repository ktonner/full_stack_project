
$("#add").on("click", saveData);

function saveData(event) {
  event.preventDefault();
  // Constructing a newBook object to hand to the database
  var title1 = $(this).data("title");
  var author1 = $(this).data("author");
  
  var newBook = {
    title: title1,
    author: author1,
    description: "Something",
    pages: 120
  };
  $.ajax({
    method: "GET",
    url: "/auth/user"
  }).then(function (user) {
    newBook.UserId = user.id;
    $.ajax({
      method: "POST",
      url: "/api/book",
      data: newBook
    }).then(function () {
      window.location.href = "/";
    });
  });
}
