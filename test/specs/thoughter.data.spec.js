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
          asyncComplete();
        })
        .fail();
        // you might do assertions in here
        asyncComplete();
        });

    });


  });

//End of iife
})();