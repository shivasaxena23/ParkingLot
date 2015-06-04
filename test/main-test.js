var expect = require("chai").expect;

var main = require("../app/parking-lot");

describe("Parking Lot", function(){


  describe("Perform Basic operations", function() {


    it("Parks your car", function() {
    //        console.log("test");
            var park   = main().parking('1 23');


            expect(park).to.equal("Parked");
      });

      it("Checks if the car is present while parking", function() {
      //        console.log("test");
              var park   = main().parking('1 23');


              expect(park).to.equal("Already a car with that number present\n");
        });


        it("Unparks your car", function() {

            var unpark   = main().parking('2 23');

            expect(unpark).to.equal("Unparked");

          });

          it("Checks if the car is present for unparking", function() {

              var unpark   = main().parking('2 29');

              expect(unpark).to.equal("No car with that number\n");

            });



        it("Checks for wrong input", function() {

            var wopt   = main().parking('3 22');

            expect(wopt).to.equal("Wrong option!");

          });



    });

    describe("Slot Empty", function() {


          before(function(){

            var slot;
            var list=new Array(2);

            for(slot=0;slot<list.length;slot++)
             {
               list[slot] = 999;
             }
             console.log(list.length);

          });


      it("checks if the slot is empty", function() {

          var slotempty  = main().slotempty();

          expect(slotempty).to.equal(0);

        });



        it("Parks your car", function() {
            var park   = main().parking('1 23');


            expect(park).to.equal("Parked");
        });

        it("Parks your car", function() {
            var park   = main().parking('1 24');


            expect(park).to.equal("Parked");
        });

        it("Parks your car", function() {
            var park   = main().parking('1 25');


            expect(park).to.equal("Parked");
        });
/*
        it("checks if the lot is full", function() {

            var slotempty  = main().slotempty();
            console.log(slotempty);
            expect(slotempty).to.equal(-1);

        });
*/

      });
});
