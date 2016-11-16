(function (){
  "use strict";

  var expect = chai.expect;

  describe("Data Module", function(){
    it("should expect the namespace exists", function(){
      expect(window.thoughter).to.be.an("object");
    });


    describe("getting list of thoughts", function(){
      it("should obtain list from the server", function(asyncComplete){
        var result = window.thoughter.recentThought(); //returns xhr promise
        expect(result).to.be.an("object"); //typeof I'm getting back
        expect(result.done).to.be.a("function");
        expect(result.fail).to.be.a("function");
        result
        .done(function(){
          // do assertions
          // make it fail: 1 is equal to two (it should fail)
          expect(1).to.equal(2);
          asyncComplete();
        })
        .fail();
        // you might do assertions in here
        expect(1).to.be.equal(1);
        asyncComplete();
      });
    });



    describe("posting new thought", function(){
      it("should post new thought to the server", function(asyncComplete){
        var result1 = window.thoughter.createNewThought();
        console.log(result1);
        expect(result1).to.be.a("object");
        expect(result1.done).to.be.a("function");
        expect(result1.fail).to.be.a("function");
        result1
        .done(function(){

        })
        .fail();

        asyncComplete();
      });
    });
  });

  //End of iife
})();
