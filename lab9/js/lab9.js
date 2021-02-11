/*
  Author: Noel Calinawan
  Created: 02.11.2021
 */

var outputEl = document.getElementById("output");
outputEl.innerText = "This is the RESULTS box that was changed in the JS file.";

var new1El = document.createElement("p");
new1El.innerText = "This text is supposed to be green.";

var new2El = document.createElement("div");
new2El.innerHTML = "<p> The highlight should be yellow. </p>";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.color = "green";
new2El.style.backgroundColor = "yellow";
