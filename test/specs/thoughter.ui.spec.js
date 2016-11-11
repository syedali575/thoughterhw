(function (){
  "use strict";
  window.thoughter = window.thoughter || {};

  var expect = chai.expect;

  //This funtion grabs html from the fixture element
  var html = $("#fixture").html();
  console.log(html);



  describe("UI Module", function(){
    it("confirming namespace window.thoughter exits", function(){
      expect(window.thoughter).to.be.a("object");
    });


    describe("add new thoughts to the ul", function(){
      afterEach(function(){
        $("#fixture").html(html);
      });


      it("it should add incoming new thoughts from server to ul", function(){
        var result = window.thoughter.showRecentThoughts([
          {id:1, content:"hello", createTime: "2016-11-07T12:00:00.000Z"},
          {id:2, content:"Whats up", createTime: "2016-11-07T12:00:00.000Z"}
        ]);
        expect(result).to.be.undefined;

        expect($("#fixture li").length).to.equal(2);
        $('#fixture li').each(function(li) {
          // expect the content of this li to be...?
        });
      });



      it('should have NO li\'s if I give it an empty array', function functionName() {
        var result = window.thoughter.showRecentThoughts([]);
        expect($("#fixture li").length).to.equal(0);
      });




      it('should have NO li\'s if I give it NO args', function functionName() {
        var result = window.thoughter.showRecentThoughts();
        expect($("fixture li").length).to.equal(0);
      });
    });
  });

  //End of iife
})();
