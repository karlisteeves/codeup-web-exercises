"use strict";
/*
* WHILE LOOPS
*/


//initialization //


var i = 10;
//
while (i > 0){
    console.log(i);
    i--;
}

console.log("loop is done");



// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)



while (i <= 90){
   console.log(i+=10);
}

//


// 2. Create a while loop that counts backwards from 50 - 1


var x = 50;

while(x >= 1){
    console.log(x);
    x--;
}

var myQuestion = true;

// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?

// while(myQuestion){
//     myQuestion = confirm("Would you like to exit?");
// }

/*
* DO-WHILE LOOPS
*/


// 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?

// do{
//     myQuestion = confirm("Would you like to exit?");
// } while (!myQuestion);


// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"



// do {
//     var color = color = prompt("What is your favorite color?");
// } while (color !== "blue");

// 6. Refactor question 1 using a do-while loop.

do {
    console.log(i +=10);
} while ( i < 100);

/*
* FOR LOOPS
*/



for(var j = 1; j <= 100; j++){
    console.log(j);
}

//
// function countFrom(x){
//     for(var j = x;j <= 100;j++){
//         console.log(j);
//         return "done counting";
//     }
//
// }



var randomColors= ["red", "blue", "orange", "yellow", "purple"];

for (var y = 0;y < randomColors.length;y++){
    console.log(randomColors[y]);
}



var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];

// 7. Create a for loop that iterates over this array and logs out each
// element to the console

for (var a = 0;a < myArray.length;a++){
    console.log(myArray[a]);
}

// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.


// for (var i = 1; i <= 100; i++) {
//     var f = i % 3 == 0, b = i % 5 == 0;
//     console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
// }

//longer way//

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log( i + " = " + "Fizz");
//     }else if (i % 5 === 0) {
//         console.log( i + " = " + "Buzz");
//     }else {
//         console.log(i);
//     }
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log( i + " = " + "FizzBuzz");
//     }
// };
// 9. Refactor question 1 using a for-loop
// for(var i = 10; i < 101; i += 10){
//     console.log(i);
// }
// //
//



/*
* BREAK AND CONTINUE
*/


//break let's you end where you want it to.

for(var i = 10; i <= 100; i++){
    if(i % 2 ===0) {
        console.log(i);
        if(i === 50){
            break;
        }
    }
}



//continue allows you to start where you want to. Consider continue as a skip.

for (var b = 100; b > 1; b--){
    if(b >10){
        continue;
    }
    console.log("skip" + );
}
// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.




// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.

