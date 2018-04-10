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

    //creates a user in db if none exists
		$.get("/api/user/"+ userId)
        .done(function(data){   
            userData = data; 
            // console.log(data);
            if(data.length === 0){
                $.post("/api/user/"+ userId)
            } else {
                getUserData(); 
            }     
               
       })

       $.get("/api/userinfo/" + userId)
       .done(function(data){
        userInfoData = data;
        if(data.length === 0){
            $.post("/api/userinfo/"+ userId)
        } else {
            getUserInfoData(); 
        }     
       })



// getUserData();
// getUserInfoData();


function getUserData(data) {   
    var nameP = $("<p>").addClass("memberName").append(userData.firstname + " " + userData.lastname);
    bioDiv.append(nameP);
}


function getUserInfoData(data){
           //  console.log(data);
          
           var roleP = $("<p>").addClass("redtxt").append(userInfoData.Role);
           var locationP = $("<p>").addClass("greentxt").append(userInfoData.location);
           var bioP = $("<p>").addClass("memberBio").append(userInfoData.Bio);

           bioDiv.append(roleP, locationP, bioP);
           // displayUserInfo(userInfoData);
}



  
})


});