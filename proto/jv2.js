var database= [
{
	username: "salman"
	password: "munna"
}
];
var newsfeed= [
{
	username: "sally"
	timeline: "nice day"

},
{
	username: "bob"
	timeline: "bad day"
}];
var userName= prompt("Enter your username");
var passWord= prompt("Enter your password");

function Signin(user,pass) {
	if(user=== database[0].username && pass=== database[0].password ){
		console.log(newsfeed);
	} else { alert("sorry get out of here");}
}
Signin(userName,passWord);