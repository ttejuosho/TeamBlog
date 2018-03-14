$(document).ready(function(){
    var userId = 0;
    var memberWrapperDiv = $(".memberWrapper");
    var bioDiv = $("<div>").addClass("bio");
    var nameP = $("<p>").addClass("memberName");
    var roleP = $("<p>").addClass("redtxt");
    var locationP = $("<p>").addClass("greentxt");
    var bioP = $("<p>").addClass("memberBio");

// -- -- MAIN LOGIC / INITIALIZATION-- --

//gets session id and initializes page
$.get("/sessionUserId")
.done(function(data){
		// console.log("auth:")
		// console.log(data);
		userId = data[0].id;
		console.log(userId);


        $.get("/api/userinfo/" + userId)
        .done(function(data){
           //  console.log(data);
           userInfoData = data;
           bioDiv.append(roleP).append(userInfoData.Role);
           bioDiv.append(locationP).append(userInfoData.location);
           bioDiv.append(bioP).append(userInfoData.Bio);
           // displayUserInfo(userInfoData);
        })


		//creates a resume in db if none exists
		$.get("/api/user/"+ userId)
		 .done(function(data){
			if(data.length === 0){
				$.post("/api/user/"+ userId)
			}
            // console.log(data);
            userData = data; 
            memberWrapperDiv.append(bioDiv).append(nameP).append(userData.firstname + " " + userData.lastname);
            // displayUserProfile(userData);           
        })






    // function displayUserProfile(userData){
    
    //     roleP.append(
    //         nameP.append(userData.firstname + " " + userData.lastname),
    //     );

    //     return roleP;
    // }

    // function displayUserInfo(userInfoData){

    //     bioDiv.append(roleP).append(userInfoData.Role);
    //     nameP.append(locationP).append(userInfoData.location);
    //     locationP.append(bioP).append(userInfoData.Bio);

    //     return bioDiv;
    // }

  
})


});