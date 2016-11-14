(function(){
  "use strict";

  window.thoughter = window.thoughter || {};

  // console.log("I am in the Thoughter HTML");

  // To switch between views of recent thoughts and new thought section.

  function showCurrentView(event){
    var id = window.location.hash || "#new";

    $("main").hide();
    $(id).show();

  }

  $(window).on("hashchange", showCurrentView);

  showCurrentView();




  // End of iife
})();
