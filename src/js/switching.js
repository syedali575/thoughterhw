(function(){
  "use strict";

  window.thoughter = window.thoughter || {};

  // console.log("I am in the Thoughter HTML");

  // To switch between views of recent thoughts and new thought section.

  function showCurrentView(){
    var id = window.location.hash || "#new";

    $("main").hide();
    $(id).show();

      if (window.location.hash === "#recent") {
        window.thoughter.recentThought();
      }
  }

  $(document).ready(function pageLoad(){
    $(window).on("hashchange", showCurrentView);
    showCurrentView();
  });





  // End of iife
})();
