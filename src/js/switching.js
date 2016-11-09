(function(){
"use strict";

window.thoughter = window.thoughter || {};

  console.log("I am in the Thoughter HTML");


  $(".recentSection").click(function hideNew(event){
    $("#new").hide();
    $("#recent").show();
  });

  $(".newSection").click(function hideRecent(event){
    $("#recent").hide();
    $("#new").show();
  });



// iife closing
  })();
