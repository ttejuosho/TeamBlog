$(document).ready(function(){
    var userId = 0;
// -- -- MAIN LOGIC / INITIALIZATION-- --

//gets session id and initializes page
$.get("/sessionUserId")
.done(function(data){
		// console.log("auth:")
		// console.log(data);
		userId = data[0].id;
		console.log(userId);

		//creates a resume in db if none exists
		$.get("/api/user/"+ userId)
		 .done(function(data){
			if(data.length === 0){
				$.post("/api/user/"+ userId)
			}
            // console.log(data);
            var firstName = data.firstname;
            var lastName = data.lastname;
            var email = data.Email;
            console.log(firstName, lastName, email);
        })

        $.get("/api/userinfo/" + userId)
         .done(function(data){
            //  console.log(data);
            var location = data.location;
            var role = data.Role;
            var bio = data.Bio;
            console.log(location, role, bio);
         })

    })

    

});