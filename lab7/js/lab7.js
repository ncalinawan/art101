/*
  Author: Noel Calinawan
  Created: 02.01.2021
 */

// Prompting for user's name outside of the function ;)
var userName = window.prompt("Enter your name:");

// Function that sorts letters of a name in alphabetical order
function sortUserName(){

  // Takes the users input, splits the string into an array that is separated by 'spaces', and then coverts the array into a single string
  var nameArray = userName.split('').sort().join('');

  // Returns the string value
  return nameArray;

}

// Output to HTML file
if (userName != null){
  if(userName != ""){
    document.writeln("Here is your sorted name: " , sortUserName(), "</br>")
  }else{
    document.writeln("You didn't enter anything >:(")
  }
} else{
    document.writeln("You didn't enter anything >:(")
}
