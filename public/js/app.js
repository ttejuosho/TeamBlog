$(document).ready(function(){

    $(".button-collapse").sideNav();

    var url = window.location.search;
    
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;


    var First_Name = $("#First_Name");
    var Last_Name = $("#Last_Name");
    var Email = $("#Email");
    var location = $("#location");
    var Role = $("#Role");
    var Bio = $("#Bio");

    $(signupForm).on("submit", function createNewUser(event){
        event.preventDefault();

 // Constructing a newUser object to saves it to the database       
        var newUser = {
            First_Name: First_Name.val().trim(),
            Last_Name: Last_Name.val().trim(),
            Email: Email.val().trim(),
            Location: location.val().trim(),
            Role: Role.val().trim(),
            Bio: Bio.val().trim()
        };

        console.log(newUser);
        submitUser(newUser);
    });

    // Submits a new User and brings user to member page upon completion
    function submitUser(User) {
        $.post("/api/user/", User, function() {
        window.location.href = "/member";
        });
    }

  // Gets post data for a post if we're editing
  function getUserData(id) {
    $.get("/api/user/" + id, function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        First_Name.val(data.First_Name);
        Last_Name.val(data.Last_Name);
        Email.val(data.Email);
        location.val(data.location);
        Role.val(data.Role);
        Bio.val(data.Bio);

        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }


    // Update a given post, bring user to the blog page when done
    function updateUserData(User) {
        $.ajax({
          method: "PUT",
          url: "/api/user",
          data: post
        })
        .done(function() {
          window.location.href = "/member";
        });
      }

});