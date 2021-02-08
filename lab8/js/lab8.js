/*
  Author: Noel Calinawan
  Created: 02.07.2021
 */

//Asks users for two numbers to later calculate
var num1 = Number(window.prompt("Enter a number:"));
var num2 = Number(window.prompt("Enter a number to be added to the first number:"));

function firstThing(test){
  console.log(test + ": This is the first thing.<br>")
}

function secondThing(test){
  console.log(test + ": This is the second thing.<br>")
}

function thirdThing(test){
  console.log(test + ": This is the third thing.<br>")
}

//function to call text pretending that calculating addition takes time LOL
function calcText(text){
  console.log(text);
}
//function that adds numbers together
function add(num1, num2){
  let sum = (num1 + num2);
  console.log("The sum of the two numbers is: " + sum);
}

//Test 1
//add(num1, num2);
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");


//Test 2
setTimeout(function(){
  firstThing("TEST 2");
}, 0);
setTimeout(function(){
  secondThing("TEST 2");
}, 0);
setTimeout(function(){
  thirdThing("TEST 2");
}, 0);

//Test 3
setTimeout(function(){
  firstThing("TEST 3");
}, 3000);
setTimeout(function(){
  secondThing("TEST 3");
}, 1000);
setTimeout(function(){
  thirdThing("TEST 3");
}, 2000);

//Callbacks for the addition of the numbers
setTimeout(function(){
  calcText("Calculating...");
}, 100);
setTimeout(function(){
  add(num1,num2);
}, 3500);
