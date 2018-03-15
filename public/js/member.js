$(document).ready(function(){
    var userId = 0;
    var bioDiv = $(".bio");



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
           console.log(data);
           userData = data; 
           var nameP = $("<p>").addClass("memberName").append(userData.firstname + " " + userData.lastname);
           bioDiv.append(nameP);
           // displayUserProfile(userData);           
       })

        $.get("/api/userinfo/" + userId)
        .done(function(data){
           //  console.log(data);
           userInfoData = data;
           var roleP = $("<p>").addClass("redtxt").append(userInfoData.Role);
           var locationP = $("<p>").addClass("greentxt").append(userInfoData.location);
           var bioP = $("<p>").addClass("memberBio").append(userInfoData.Bio);

           bioDiv.append(roleP, locationP, bioP);
           // displayUserInfo(userInfoData);
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