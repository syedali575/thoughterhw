(function(){
  "use strict";
  window.thoughter = window.thoughter || {};

  // To call these functions in other files
  window.thoughter.createNewThought = createNewThought;
  window.thoughter.recentThought = recentThought;


  console.log("I am in data.js");




  /**
   *Receives string of new thought from new_thought_ui
   *and makes an ajax call to post new thought.
   *@param {string} newThought that user like to share
   *@return {Object} content or provides fail message.
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
          url:"https://thoughter.herokuapp.com/api/Thoughts",
          method: "GET",
          headers:{
            "Content-Type": "application/json"
          }
        })
        .done(function handleSuccess(data){
          console.log("It worked", data);
          // console.log(window.thoughter.createNewThought);
          window.thoughter.showRecentThoughts(data);
        })
        .fail(function handleFailure(xhr){
          console.log("Unable to communicate", xhr);
        });
      }





// End of iife
})();

(function(){
  "use strict";
  window.thoughter = window.thoughter || {};



  $(".share").on("click", function newThoughts(event){
    event.preventDefault();
    /// Acquiring new thought from form
    var thought =$(".incoming").val();
    console.log(thought);
    window.thoughter.createNewThought(thought);
  });




// End of iife
})();

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

        list_Thoughts.forEach(function loopArray(thought){
          console.log(thought);
          $("#recent ul")
          .append(
            '<li>' +
            'Thought:' + thought.content +
            '</li>'
          );
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


  $("main").hide();

  $(window).on("hashchange" ,function currentView(event){

    var theElement = $(window.location.hash);

    $("main").hide();
    theElement.show();

    $("nav li").removeClass("active");
    $('[href="' + window.location.hash + '"]').addClass("active");

  });

  // what view should i start at?

// End of iife
  })();
