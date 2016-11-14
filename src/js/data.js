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
