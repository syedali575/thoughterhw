(function (){
  "use strict";

  var expect = chai.expect;


    describe("namespace", function(){
      it("should know that namespace exists", function(){
        expect(window.thoughter).to.be.a("Object");
      });


        describe("post new thought", funtion(){
          it("should make an ajax call and post new thougt", function(doneCallback){
            var xhrPromise = window.thoughter.createNewThought("Hello");
            expect(xhrPromise).to.be.a("string");
            expect(xhrPromise.done).to.be.a("function");
            expect(xhrPromise.fail).to.be.a("function");
          });
        });



    });

//End of iife
})();
