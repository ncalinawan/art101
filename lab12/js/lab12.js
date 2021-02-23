/*
  Author: Noel Calinawan
  Created: 02.23.2021
 */

function sortingHat(str){
  var nameLength = str.length;

  var mod = nameLength % 4;

  if(mod === 1){
    return "Gryffindor"
  }else if (mod === 2){
    return "Ravenclaw"
  }else if (mod === 3){
    return "Slytherin"
  }else{
    return "Hufflepuff"
  }
}

$('#button').click(function(){
  var name = $('#input').val();

  var house = sortingHat(name);

  $('#output').append("<h1>")
  $('#output h1').text("The Sorting Hat has sorted you into " + house + ".");
})
