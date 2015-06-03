var parkingLot = require('./parking-lot');

var readline = require('readline');

console.log("Welcome!");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Press 1 to Park and 2 to Unpark?\n", function(answer) {

  var disp = parkingLot().parking(answer);
  console.log(disp);

  rl.close();

});
