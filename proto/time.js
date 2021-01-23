var today= new Date();
var hourNow= today.getHours();
var greeting;
var name = prompt('enter your name')

if(hourNow > 18) {
greeting= "Good Evening";}
else if(hourNow > 12) {
greeting = "Good Afternoon";} else if (hourNow > 0) { greeting= "Good morning";} 
else {greeting = " welcome ";}

document.write('<h1 class="time">' + greeting + ',' + name + '</h1>');