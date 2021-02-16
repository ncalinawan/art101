/*
  Author: Noel Calinawan
  Created: 02.16.2021
 */

// Function that sorts letters of a name in alphabetical order
  function sortUserName(userName){
    return userName.split("").sort().join("");
  }

// Function that randomizes an array
  function randomArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

// Function to create an anagram
  function anagramName(userName) {
        var nameArray = userName.toLowerCase().split("");
        var shuffledArray = randomArray(nameArray);
        var anagram = shuffledArray.join("");
        return anagram;
    }


 // Output to HTML file
var submitButton = document.getElementById('submit-button');
  submitButton.addEventListener("click", function(){
    var userName = document.getElementById('name-field').value;
    var sortedName = sortUserName(userName);
    var outputArea = document.getElementById('output');
    outputArea.innerText = sortedName;
    var outputComment = document.getElementById('comment');

    // Comments on whether or not you input anything
    if (userName != null){
      if(userName != ""){
        outputComment.innerText = "Your sorted name is above and an anagram of your name is below."
      }else{
        outputComment.innerText = "You didn't enter anything >:("
      }
    } else{
        outputComment.innerText = "You didn't enter anything >:("
    }

    // Anagram and output to HTML
    var anagram = anagramName(userName);
    var anagramArea = document.getElementById('anagram');
    anagramArea.innerText = anagram;
  })
