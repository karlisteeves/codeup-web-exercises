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

console.log(allCones);
console.log("We currently have " + allCones)




function sellingCones() {
    do {
        var conesSold = Math.floor(Math.random() * 5) + 1;
        console.log("We currently have " + allCones + " You want " + conesSold);
        allCones -= conesSold;



        if (conesSold >= allCones) {
            console.log("I don't have enough cones.")
        }
    } while (allCones > 0);
    console.log("Yay! I ran out of cones.");
}

