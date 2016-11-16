(function(){
  "use strict";
  window.thoughter = window.thoughter || {};
  window.thoughter.showRecentThoughts = showRecentThoughts;


  /**
  * Appends incoming recent thoughts to recent thought section.
  * @param  {Array} list_Thoughts  An array of thought Objects
  * @return {void}
  */
  function showRecentThoughts(list_Thoughts) {

    if(!Array.isArray(list_Thoughts)) {
      return;
    }
    else {
      // delete existing recent thoughts li prior to looping
      $("#recent ul")
      .html("");

      // Looping through array
      list_Thoughts.forEach(function loopArray(thought){

        // Appending recent thoughts to UL in recent main
        $("#recent ul")
        .append(
          '<li class="panel-heading">' +
          'Post Time: ' + thought.createTime +
          '</li>' +
          '<li class="panel-body">' +
          'Thought: ' + thought.content +
          '</li>');
        });
      }
    }

    //End of iife
  })();
