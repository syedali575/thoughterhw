(function (){
  "use strict";

  var expect = chai.expect;

  describe("Switching Module", function(){
    it("confirming namespace window.thoughter exits", function(){
      expect(window.thoughter).to.be.a("object");
    });
  });



//End of iife
})();
