(function (){

  "use strict";

  var expect = chai.expect;

  describe("Data Module", function(){
    it("Should expect the namespace exists", function(){
      expect(window.thoughter).to.be.an("object");
    });

    //===================================================================
    describe("Getting list of thoughts that have generated earlier", function(){

      it("should obtain list from the server", function(doneCallback){
        var xhrPromise = window.thoughter.recentThought(); //returns xhr promise
        expect(xhrPromise).to.be.an("object"); //typeof I'm getting back
        expect(xhrPromise.done).to.be.a("function");
        expect(xhrPromise.fail).to.be.a("function");

        xhrPromise
        .done(function handleSuccess(data){
          expect(data).to.be.an.instanceof(Array);
          expect(data).to.have.length.of.at.most(20);
          expect(data[0]).to.be.an.instanceof(Object);
          expect(data[0].content).to.be.a("string");
          expect(data[0].id).to.be.a("number");
          doneCallback();
        })

        .fail(function handleFailure(){
          doneCallback("Ajax call to get recent thought, failed");
        });
      });
    });


    //===============================================================

    describe("Posting new thought", function(){

      it("should post new thought to the server", function(doneCallback){
        var result = window.thoughter.createNewThought("Testing createNewThought");
        console.log(result);
        expect(result).to.be.a("object");
        expect(result.done).to.be.a("function");
        expect(result.fail).to.be.a("function");

        result
        .done(function handleSuccess(data){
          expect(data).to.be.an("object");
          expect(data.content).to.equal("Testing createNewThought");
          expect(data.content).to.be.a("string");
          expect(data.id).to.be.a("number");
          expect(data.authorId).to.be.a("null");
          doneCallback();
        })

        .fail(function handleFailure(){
          doneCallback("Ajax call add new thought, failed");
        });
      });
    });
    //=====================================================================

    // End data module
  });

  //End of iife
})();
