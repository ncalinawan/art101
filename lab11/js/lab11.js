/*
  Author: Noel Calinawan
  Created: 02.16.2021
 */

var challengesEl = $('#challenges');
var problemsEl = $('#problems');
var resultsEl = $('#results');


var myButton = "<button>Click To Show Text</button>";

challengesEl.append(myButton);
problemsEl.append(myButton);
resultsEl.append(myButton);


$('#challenges button').click(function(){
  $('#challenges').toggleClass('special');
})

$('#problems button').click(function(){
  $('#problems').toggleClass('special');
})

$('#results button').click(function(){
  $('#results').toggleClass('special');
})
