"use strict";


var i = 2;

while(i <=65536) {
    // What needs to happen is setting the variable i equal to i*i that way variable 'i' will always multiple the current value of i.
    i = i+i;
    // Then you can console.log the value i.
    console.log(i)
}



//cones are hard

var allCones = Math.floor(Math.random() * 50) + 50;
var conesSold =Math.floor(Math.random() * 5) + 1;



do {

} while (allCones >= 0);



//
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
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);