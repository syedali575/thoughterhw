(function(){
  "use strict";
  window.thoughter = window.thoughter || {};



  $(".sharethought").on("submit", function newThoughts(event){
    event.preventDefault();

    // Acquiring new thought from form
    var thought =$(".incoming").val();

    // Executing createNewThought function in data to make Ajax call
    window.thoughter.createNewThought(thought)
    .done(function changeView(){
      window.location.hash = "#recent";
    });

  });




  // End of iife
})();
