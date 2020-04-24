
$("#add").on("click", function () {
    console.log("clicked")
    // var favCard = `
    // <div class="card">
    // <div class="card-content">
    //       <div class="media">
    //         <div class="media-left">
    //           <figure class="image is-60x60">
    //             <img src="${imgURL}" alt="Placeholder image">
    //           </figure>
    //         </div>
    //         <div class="media-content">
    //             <p class="title is-4">${title}</p>
    //             <p class="subtitle is-6">${author}</p>
    //             <p><button class="button" data-title="${title}" data-author="${author}" data-page="${pages}" id="add">Add favorite</button></p>
    //             <br>
    //             <div class="content">
    //             ${desc} 
    //             </div>
    //           </div>
    //       </div>
    //   </div>
    // </div>

    // <hr>
    // `


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

                    // var row = $("<div>");
                    // //row.addClass("book");
                    // row.append("<p>" + data[i].title + "</p>");
                    // row.append("<p>" + data[i].author + "</p>");
                    // row.append("<p>" + data[i].description + "</p>");
                    // row.append("<p>" + data[i].pages + "</p>");
                    // $("#favorites").prepend(row);
                    // console.log("made it this far")



                    var favCard = `
                    <div class="card">
                    <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                    <figure class="image is-60x60">
                         <img src="${data[i].imgURL}" alt="Placeholder image">
                    </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">${data[i].title}</p>
                      <p class="subtitle is-6">${data[i].author}</p>
                      <br>
                    </div>
                     </div>
                    </div>
                    </div>
        
                    <hr>
          `
                    $("#favorites").prepend(favCard)
                }

            }
        });
    }
}
)


$(document).on("click","#add", function(){

// //get user ID
// $.ajax({
//     method: "GET",
//     url: "/auth/user"
//   }).then(function (user) {
//     id = user.id;
//     console.log(id)
//             // Ask the server for the books from the table with this user
//             console.log("running")
//             $.get("/api/all/" + id, function (data) {
//                 console.log("Data should be here", data)

//                 if (data.length !== 0) {
//                         i=(data.length-1)
//                         console.log(i)

//                         var row = $("<div>");
//                         //row.addClass("book");
//                         row.append("<p>" + data[i].title + "</p>");
//                         row.append("<p>" + data[i].author + "</p>");
//                         row.append("<p>" + data[i].description + "</p>");
//                         row.append("<p>" + data[i].pages + "</p>");
//                         $("#display-favorites").append(row);
//                         console.log("made it this far")
//                     }

//                 })
//             });
//         })

