$(document).ready(function(){

    $(".button-collapse").sideNav();

    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var email = $("#email");
    var location = $("#location");
    var role = $("#role");
    var bio = $("#bio");

    $(signup).on("submit", function createUser(event){

        var newUser = {
            First_Name: firstName.val().trim(),
            Last_Name: lastName.val().trim(),
            Email: email.val().trim(),
            Location: location.val().trim(),
            Role: role.val().trim(),
            Bio: bio.val().trim()
        };

        console.log(newUser);
    })

});