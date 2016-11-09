(function(){
"use strict";

window.thoughter = window.thoughter || {};

  console.log("I am in the Thoughter HTML");


  $(".recentSection").on("submit", function hideNew(event){
    $("#new").hide();
  });

  $(".newSection").on("submit", function hideRecent(event){
    $("#recent").hide();
  });



// iife closing
  })();
