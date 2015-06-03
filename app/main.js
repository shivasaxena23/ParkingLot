

console.log("Hello!");

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var i=1;
var cases, answer;

exports.parking = function(cases){

if(cases == 1)
{
  return "Parked";
  //console.log("Parked");
  i=0;
}
else if(cases == 2)
{
  return "Unparked";
  //console.log("Unparked");
  i=0;
}
else {
  return "Wrong option!";
  //console.log("Wrong option!");
  i=1;
}
}

rl.question("Press 1 to Park and 2 to Unpark?\n", function(answer) {

  var disp = parking(answer);
  console.log(disp);

  rl.close();

});
