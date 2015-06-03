



module.exports = function() {
  var i=1;
  var cases, answer;

  var parking = function(cases) {

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

  return {parking: parking};
};
/*
readit = function(){
rl.question("Press 1 to Park and 2 to Unpark?\n", function(answer) {

  return answer;

});
}
*/
