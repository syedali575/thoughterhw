(function(){
  "use strict";
  window.thoughter = window.thoughter || {};



  $(".share").on("click", function newThoughts(event){
    event.preventDefault();
    /// Acquiring new thought from form
    var thought =$(".incoming").val();
    console.log(thought);
    window.thoughter.createNewThought(thought);
  });




// End of iife
})();
