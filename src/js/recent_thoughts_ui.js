(function(){
  "use strict";
  window.thoughter = window.thoughter || {};

  console.log("I am clicking recent thoughts");

  $(".recentSection").on("click", function shareThoughts(event){

    window.thoughter.recentThought();

  });






//End of iife
})();
