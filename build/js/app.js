(function(){
  "use strict";
  window.thoughter = window.thoughter || {};

  // To call these functions in other files
  window.thoughter.createNewThought = createNewThought;
  window.thoughter.recentThought = recentThought;


  /**
  *Receives string of new thought from new_thought_ui
  *and makes an ajax call to post new thought.
  *@param {string} newThought that user like to share
  *@return {Promise} content or provides fail message.
  */

  function createNewThought(newThought) {
    return $.ajax({
      url:"https://thoughter.herokuapp.com/api/Thoughts",
      method: "POST",
      data: JSON.stringify({"content":newThought}),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .done(function handleSuccess(data){
      console.log("It worked", data);
    })
    .fail(function handleFailure(xhr){
      console.log("Unable to communicate", xhr);
    });
  }



  /**
  *This function makes an ajax call to retrieve
  *all recent thoughts posted
  *@param {} no argument required to execute this function
  *@return {PromiseObjects} content Ajax call promise.
  */


  function recentThought() {
    return $.ajax({
      url: "https://thoughter.herokuapp.com/api/Thoughts",
      method: "GET",
      dataType: "json",
      data: {
        filter: {"limit": 20, "order": "createTime DESC"
        }
      },
    })
  .done(function handleSuccess(data){
    console.log("It worked", data);
    window.thoughter.showRecentThoughts(data);

  })
  .fail(function handleFailure(xhr){
    console.log("Unable to communicate", xhr);
  });
}


// window.thoughter.recentThought();



// End of iife
})();

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
