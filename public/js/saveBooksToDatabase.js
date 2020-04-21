//const favorite = document.querySelector("");
//const titleInput = document.querySelector("");




//$(favorite).on("click", saveData);

function saveData(event) {
  //event.preventDefault();
  // Constructing a newBook object to hand to the database
  var newBook = {
    title: "new book",
    author: "new author",
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
      window.location.href = "./dashboard";
    });
  });
}

saveData()