/*
  Author: Noel Calinawan
  Created: 02.01.2021
 */

 var myTransport = ["car", "bus", "walking"];

 var myMainRide = {
    make: 'Mercedes-Benz',
    model: 'SLK 320',
    color: 'Black',
    year: 2001,
    age: function(){
      return 2021 - age;
    }
};

document.writeln("Kinds of transportation I use: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
