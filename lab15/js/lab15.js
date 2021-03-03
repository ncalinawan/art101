/*
  Author: Noel Calinawan
  Created: 03.04.2021
 */

$("#activate").click(function() {

    var topic = $('#input').val();

    // Using the core $.ajax() method
    $.ajax({
      // The URL for the request (from the api docs)
      url: "https://en.wikipedia.org/api/rest_v1/page/summary/" + topic.replace(" ", "_") + "?redirect=true",
      // The data to send (will be converted to a query string)
      data: {
        // here is where any data required by the api
        //   goes (check the api docs)

      },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType: "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
        // do stuff
        console.log(data);
        if(data.thumbnail){
          //$('#output').html(data.thumbnail)
          console.log(data.thumbnail.source);
          var image = new Image;
          image.src = data.thumbnail.source
          $('#output').html(image);
        }else{
          $('#output').html("I can't find anything for that.")
        }

      },
      // What we do if the api call fails
      error: function(jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
      }
    })


})
