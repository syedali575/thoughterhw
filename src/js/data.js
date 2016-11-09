(function(){
  "use strict";
  window.thoughter = window.thoughter || {};
  window.thoughter.createNewThought = createNewThought;
  window.thoughter.recentThought = recentThought;

  console.log("I am in data.js");


  /// Ajax call to create a new thought
  /// This function is receiving data from form via new_thought_ui
  function createNewThought(newThought) {
      $.ajax({
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



    /// Ajax call to retrieve recent thoughts
    function recentThought() {
        $.ajax({
          url:"https://thoughter.herokuapp.com/api/Thoughts",
          method: "GET",
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








// End of iife
})();
