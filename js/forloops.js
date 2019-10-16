"use strict";

function showMultiplicationTable(x) {
    for (var i = 1; i <= 10; i++) {
        console.log(x + " x " + i + " = " + x * i);
    }
}

showMultiplicationTable(7);


function tenRandom() {
    for (var i = 0; i < 10; i++) {
        var num = Math.floor(Math.random() * 180) + 20;
        if (num % 2 === 0) {
            console.log(num + " is even");
        } else
            console.log(num + " is odd");
    }
}

tenRandom();

function pyramid() {
    for (var i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }
}

pyramid();

function countDownByFive() {
    for (var i = 100; i > 0; i -= 5) {
        console.log(i);
    }
}

countDownByFive();