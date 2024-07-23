var fs = require("fs");
function clicked(){
	//document.getElementById("clicks").innerHTML = document.getElementById("clicks").innerHTML +1;
	var clickValue=document.getElementById("clicks").innerHTML;
	clickValue++;
	
	document.getElementById("clicks").innerHTML=clickValue;
	
}
/*
function store(){
	fs.appendFile("saveFile.txt", "fuck", function(err) {
			if (err) throw err;
		}
}
 Store
window.onload = function(){
	retrieveClicks();
	document.getElementById("clicks").innerHTML = 2;
}
function retrieveClicks(){
	document.getElementById("clicks").innerHTML = localStorage.getItem("clickSave");
} */
// Retrieve

function authenticateUser(){
		var userName=document.getElementById("username");
		var usernameLabel=document.getElementById("usernamelabel");
		var Password=document.getElementById("password");
		var passwordLabel=document.getElementById("passwordlabel");
		//create a database with all users created. Maybe start by taking the username and password and entering to a text file?
		//I think this is definetly a security issue so it won't work. I wonder how companies do it. I have no internet right now.
		
		
		if (userName.value){
			usernameLabel.style.color = "white";
		}
		if (Password.value){
			passwordLabel.style.color = "white";
		}
		
		if (!userName.value){
			usernameLabel.style.color = "red";
		} else if (!Password.value){
			passwordLabel.style.color = "red";
		}
}


//Static or dynamic?
//Who will host?
//How to start the counter since nothing is saved upon launch.
//Can I get it to update in real time are only when refresh. 
	//maybe if its static then just have an automated counter that estimates to give illusion of live updating.
	