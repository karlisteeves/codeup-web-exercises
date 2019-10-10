"use strict";


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
//
// function numGame() {
//     var userConfirm = confirm("Would you like to enter a number?")
//     if (userConfirm === false) {
//         return (alert("You can't count?"));
//     } else {
//         var userNumber = parseInt(prompt("Please enter a number."));
//     }
//     if (isNaN(userNumber)) {
//         return (alert("That's not a number."));
//     }
//
//
//     if (userNumber % 2 === 0) {
//         alert("That's an even number.");
//     } else {
//         alert("That's an odd number.");
//     }
//
//     alert("your number plus 100 is " + (userNumber + 100));
//
//     if (userNumber >= 0) {
//         alert("That's positive number.");
//     } else {
//         alert("That's an odd number.");
//     }
// }
//
//
// numGame()
//

// var userConfirm = confirm("Would like to enter a number?")
//
// if (userConfirm) {
//     var enterNumber = prompt("Please enter a number.")
//     var isNumber = !isNaN(enterNumber);
//
//     if (isNumber){
//        var userNumber = parseFloat(enterNumber);
//
//         if (userNumber % 2 === 0) {
//             alert("That's an even number.");
//         } else {
//             alert("That's an odd number.");
//         }
//
//
//
//
//     } else {
//         alert("This is not a number.");
//     }
//
// }
// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// // console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color){
//     var colorMessage;
//     if
// }

//
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
//  */
//
//
// function analyzeColor(colors) {
//     var colors = (randomColor);
//     if (colors === "red") {
//         return "That's my favorite color, too!";
//     } else if (colors === "orange") {
//         return "I hate that color.";
//     } else if (colors === "yellow") {
//         return "Rubber ducks are yellow.";
//     } else if (colors === "green") {
//         return "Green like boogies?!";
//     } else if (colors === "blue") {
//         return "Blue is the color of the sky!";
//     }else if (colors === "indigo"){
//         return "Indigo is kind of like blue.";
//     } else if (colors === "violet") {
//         return "Violet is the color of pretty flowers.";
//     }
//     else {
//         return "I don't know that color.";
//     }
// }
//
// console.log(analyzeColor(colors));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

//
// function analyzeColor(colors) {
//     var colors = randomColor;
//     switch (colors) {
//         case "red":
//             return "That's my favorite color, too!";
//         case "orange":
//             return "I hate that color.";
//         case "yellow":
//             return "Rubber ducks are yellow.";
//         case "green":
//             return "Green like boogies?!";
//         case "blue":
//             return "Blue is the color of the sky!";
//         case "indigo":
//             return "Indigo is kind of like blue.";
//         case "violet":
//             return "Violet is the color of pretty flowers.";
//         default:
//             return "I don't know that color.";
//     }
//
// }
//
// console.log(analyzeColor(colors));
// //


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */



// function analyzeColor() {
//     var userColor = prompt("Enter a color!");
//     switch (userColor) {
//         case "red":
//             return "That's my favorite color, too!";
//         case "orange":
//             return "I hate that color.";
//         case "yellow":
//             return "Rubber ducks are yellow.";
//         case "green":
//             return "Green like boogies?!";
//         case "blue":
//             return "Blue is the color of the sky!";
//         case "indigo":
//             return "Indigo is kind of like blue.";
//         case "violet":
//             return "Violet is the color of pretty flowers.";
//         default:
//             return "I don't know that color.";
//     }
//
// }
//
// console.log(analyzeColor(colors));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalPrice){
    var discountRate = 0;
    switch(luckyNumber){
        case 0:
            discountRate = 0;
            break;
            case 1:
                discountRate = .1;
                break;
        case 2:
            discountRate = .25;
            break;
            case 3:
                discountRate = .35;
                break;
                case 4:
                    discountRate = .50;
                    break;
                    case 5:
                        discountRate = 1;
                        break;
    }
    return totalPrice = totalPrice - (totalPrice * discountRate);

}

console.log(calculateTotal(4, 100));


//a number between 1 - 5 is generated. If user has number 0, they get no discount. If the number is 1, they get 10%,
// if it is 2, they get 25%, if it is three, they get 35%, if it is 4, they get 50% and if it is five, they get
//item for free. The function will accept a lucky number and total amount, and return a discounted price.

var luckyNumber = Math.floor(x:Math.random() * 6);
console.log(luckyNumber);

var totalBillPrompt = parseFloat(prompt("What was your total bill?"));

var finalAmount = calculateTotal(luckyNumber, totalBillPrompt);

alert("Your lucky number is: "+luckyNumber+ "Your total bill was: " +totalBillPrompt + " Your isount total is: " +
finalAmount);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
