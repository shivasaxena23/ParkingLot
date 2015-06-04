
var parkingLot=require('./parking-lot');
var readline = require('readline');

console.log("Hello!");
var size_ipt_flag =1;
var size;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("Enter the size of the parking lot ?\n");
rl.on('line', function(answer){

  if(size_ipt_flag == 1)
  {
    size = answer;
    console.log("Size is :" + size);
    exports.size = size;
    size_ipt_flag = 0;

  }
  else{

    if(answer == 0)
    {
      rl.close();
    }
    else
    {
      var disp = parkingLot().parking(answer);
      console.log(disp);

    }
  }

  console.log("Press 1 to Park and 2 to Unpark 0 to exit\n");
});
