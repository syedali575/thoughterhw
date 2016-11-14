(function(){
  "use strict";
  window.thoughter = window.thoughter || {};
  window.thoughter.showRecentThoughts = showRecentThoughts;


  console.log("I am clicking recent thoughts");

  $(".recentSection").on("click", function shareThoughts(event){
    window.thoughter.recentThought();
  });


  /**
  * Appends incoming recent thoughts to recent thought section.
  * @param  {Array} list_Thoughts  An array of thought Objects
  * @return {void}
  */
  function showRecentThoughts(list_Thoughts) {
    // what do i do if i get NO input?
    if(!Array.isArray(list_Thoughts)) {
      return;
    }
    else {
      // Looping through array
      list_Thoughts.forEach(function loopArray(thought){
        console.log(thought);

        $("#recent ul")
        .append(
          '<li class="panel-heading">' +
          'Post Time: ' + thought.createTime +
          '</li>' +
          '<li class="panel-body">' +
          'Thought: ' + thought.content +
          '</li>'
        );

        recent === window.location.hash;
      });
    }
  }


  window.thoughter.recentThought();

  //End of iife
})();
