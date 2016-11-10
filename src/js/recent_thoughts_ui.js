(function(){
  "use strict";
  window.thoughter = window.thoughter || {};
  window.thoughter.showRecentThoughts = showRecentThoughts;


  console.log("I am clicking recent thoughts");

  $(".recentSection").on("click", function shareThoughts(event){
    window.thoughter.recentThought();
  });



  function showRecentThoughts(list_Thoughts) {
    list_Thoughts.forEach(function loopArray(thought){
      console.log(thought);
      $("#recent ul")
      .append(
        '<li>' +
        'Thought:' + thought.content +
        '</li>'
      );
    })
  }



//End of iife
})();
