"use strict";
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
//11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
//from W3 Resources

var a = 34243; //First number
var b = 55;  //Second number

var gcd; //make a variable that will store the greatest common divisor


while (a!=b) //this compares a to b, and while a does NOT equal be
{
    if (a>b)  //if a is greater than b, then do the following math
    {
        a = a -b;
    }
    else
    {
        b = b - a; //if a is not greater than be, then b will now equal b minus a.
    }
}
gcd = a; //we must return the new a, otherwise the solution will come back as undefined.

console.log(gcd);


//Given a total due and an array representing the amount of change in your pocket,
// determine whether or not you are able to pay for the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.

function changeEnough(change, amountDue) {
    var sum = change[0]*0.25 + change[1]*0.1 + change[2]*0.05 + change[3]*0.01; //this will represent coins like quarters, nickles, etc
    return sum >= amountDue; //return the sum if it's greater than or equal to amountDue
}

console.log(changeEnough([0, 0, 20, 5], 0.75));



//Week THREE pod group//

//Use a bootstrap modal for the message that fades in after 8 seconds. You may find that you can use bootstrap's modal methods to achieve the fading effect.

$(".alert").fadeIn(5000);


