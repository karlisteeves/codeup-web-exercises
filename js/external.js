"use strict";
var message = "Hello from External JS!";
console.log(message);

alert("Welcome to my website!")

var color = prompt("What's your Favorite Color?");
alert( "Hey, " + color + " is my favorite color, too!");

//


var daysRented = prompt( "How many days have you had this rental?");
function priceDay(daysRented){
    return 3 * daysRented;
}
console.log(priceDay(daysRented));

//
var googleHours = prompt ("How many hours have you worked for google this week?");
var amazonHours = prompt ("How many hours have you worked for amazon this week?");
var facebookHours = prompt  ("How many hours have you worked for Facebook this week?");
function weekPay (googleHours, amazonHours, facebookHours){
    var googlePay = 400 * googleHours;
    var amazonPay = 380 * amazonHours;
    var facebookPay = 350 * facebookHours;
    return googlePay + amazonPay + facebookPay;
}
console.log (weekPay(googleHours + amazonHours + facebookHours));

//ask about this one it is a tricky thing//

var availableSpace = true;
var scheduleSpace = true;
var enrollmentStatus = availableSpace && scheduleSpace;
console.log(enrollmentStatus);

//


var username= 'codeup';
var password = 'notastrongpassword';

password.length >= 5 && password.indexOf(username) === -1 && username.length <= 20 && username === username.trim() && password === password.trim();
