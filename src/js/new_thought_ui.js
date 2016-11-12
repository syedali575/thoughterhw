(function(){
  "use strict";
  window.thoughter = window.thoughter || {};



  $(".yellow").on("submit", function newThoughts(event){
    event.preventDefault();
    /// Acquiring new thought from form
    var thought =$(".incoming").val();
    console.log(thought);
    window.thoughter.createNewThought(thought);

    var recent = $(window.location.hash);

    $("main").show();
    recent.hide();
    
  });




// End of iife
})();
