(function(){
"use strict";

window.thoughter = window.thoughter || {};

  // console.log("I am in the Thoughter HTML");

// To switch between views of recent thoughts and new thought section.


  $("main").hide();

  $(window).on("hashchange" ,function currentView(event){

    var theElement = $(window.location.hash);

    console.log(theElement);
    $("main").hide();
    theElement.show();

    $("nav li").removeClass("active");
    $('[href="' + window.location.hash + '"]').addClass("active");

  });

  // what view should i start at?

// End of iife
  })();
