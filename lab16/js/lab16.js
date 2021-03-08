/*
  Author: Noel Calinawan
  Created: 03.09.2021
 */

 // Using the core $.ajax() method
 $.ajax({
     // The URL for the request (from the api docs)
     url: "https://xkcd.com/info.0.json",
     // The data to send (will be converted to a query string)
     data: {
             // here is where any data required by the api
             //   goes (check the api docs)

           },
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
         $('#output-text').html("<h2>" + data.title);
         $('#output-image').html("<img src='" + data.img + "'title='" + data.alt + "'>");
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
 })
