var List=require('./list');
var main = require('./main');
var list=List.list;
var Lot_full =0;

module.exports = function() {

  var cases;

var parking = function(cases) {

  var slot;
  var cases_n_car=new Array(2);

  cases_n_car = cases.split(" ");
  cases = cases_n_car[0];
  //console.log("before if");
  //console.log(cases_n_cars);
  //console.log(cases);
  //  console.log(slot);
    if(cases == 1)
    {
      //console.log(" if case 1");

      for(slot = 0; slot<list.length; slot++){
        //console.log(" for slot");
        //console.log(slot);

        if(list[slot]==cases_n_car[1])
          {
            return "Already a car with that number present\n";
          }
        }

      if(Lot_full == 0)
      {
          var slot=slotempty();

          list[slot]=cases_n_car[1];
          console.log("slot allocated is : " + (slot+1));
          var slot=slotempty();
          if(slot == -1)
          {
              Lot_full = 1;
              return "\nLot is full, Size : " + list.length + "\n";

          }
          return "Parked";

      }
      else{

        return "Lot Full!!";

      }

    }
    else if(cases == 2)
    {
      for(slot=0;slot<list.length;slot++){
        if(list[slot]==cases_n_car[1])
          {
            list[slot]=999;
            if(Lot_full == 1)
            {

              console.log("Lot has space again");
              Lot_full = 0;
            }
            console.log("slot was at : " + (slot+1));
            return "Unparked";

          }
        }
        if(slot == list.length)
        {
          return "No car with that number\n";
        }
    }
    else {

      return "Wrong option!";

    }
  }

  var slotempty = function()
  {
    for(slot=0;slot<list.length;slot++)
      {
        if(list[slot]==999){
        break;
        }
      }
      if(slot == main.size)
      {
        return -1;
      }

      return slot;
    }
  return {parking: parking,slotempty:slotempty};

};
