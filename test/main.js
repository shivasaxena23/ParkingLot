var expect = require("chai").expect;
var main = require("../app/main");

describe("Parking Lot", function() {

    describe("Parking", function(){
      it("Parks your car", function() {

          var park   = main.parking(1);

          expect(park).to.equal("Parked");

        });
    });

    describe("Unparking", function(){
      it("Unparks your car", function() {

          var unpark   = main.parking(2);

          expect(unpark).to.equal("Unparked");

        });
    });

    describe("Wrong option", function(){
      it("Checks for wrong input", function() {

          var wopt   = main.parking(4);

          expect(wopt).to.equal("Wrong option!");

        });
    });

  });
