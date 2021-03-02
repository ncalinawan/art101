/*
  Author: Noel Calinawan
  Created: 02.25.2021
 */
var str = "";

function fizzBuzz() {
  for (var i = 1; i <= 200; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
      debugger;
      str = i + " FizzBuzzBoom";
      $("#output").append("<p>" + str + "</p>");
      console.log(i + "fizzbuzzboom")
    } else if (i % 3 == 0 && i % 5 == 0) {
      str = i + " FizzBuzz";
      $("#output").append("<p>" + str + "</p>");
      console.log(i + "fizzbuzz")
    } else if (i % 3 == 0 && i % 7 == 0) {
      str = i + " FizzBoom";
      $("#output").append("<p>" + str + "</p>");
      console.log(i + "fizzboom")
    } else if (i % 5 == 0 && i % 7 == 0) {
      str = i + " BuzzBoom";
      $("#output").append("<p>" + str + "</p>");
      console.log(i + "buzzboom")
    } else if (i % 3 == 0) {
      str = i + " Fizz";
      $("#output").append("<p>" + str + "</p>");
      console.log(i + "fizz");
    } else if (i % 5 == 0) {
      str = i + " Buzz";
      $("#output").append("<p>" + str + "</p>");
      console.log(i + "buzz");
    } else if (i % 7 == 0) {
      str = i + " Boom";
      $("#output").append("<p>" + str + "</p>");
      console.log(i + "boom");
    } else {
      str = i;
      $("#output").append("<p>" + str + "</p>");
      console.log(i)
    }
  }
}
fizzBuzz();
