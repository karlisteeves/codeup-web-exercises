"use strict";

var num = 0;
while (true) {
    num = +prompt("Enter a valid number between 1 and 50");

    if (num >= 1 && num <= 50) {
        break;
    }
}

console.log("Number to skip is: " + num);

for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (i === num) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    console.log("Here is an odd number: " + i);
}

