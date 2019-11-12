"use strict";

/*********************************************
 *              .map
 ******************************************** */

// const numbers = [1,2,3,4,5,6,7,8,9,10];

//TO DO TOGETHER: Let's map through the array of number and add 1 to each
// element. Console log the new copy of the array.

//
// let newArrays = numbers.map(function(num){
//     return num + 1;
// });
//
// console.log(newArrays);
// //TO DO: Map through the new array of numbers and this time multiply each
// // element by 3. Console log the new copy.
//
// let newArray = numbers.map(function(num){
//     return num * 3;
// });
//
// console.log(newArray);
/*********************************************
 *              .filter
 ******************************************** */
const binary = [1,1,1,1,0,0,1,1,1,1];

// TO DO TOGETHER: Let's filter through our binary and return all the true
// values. We'll store the new array in a variable named 'ones'

const ones = binary.filter(function(num){
    return num == true;
});

console.log(ones);
// TO DO: filter through binary again and this time, return all the false
// values.

const zero = binary.filter(function(num){
    return num == false;
});

console.log(zero);

const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TO DO: filter through the array of objects and return all fruit type
// objects.

const fruits = fruitsAndVeggies.filter(function(fruit){
    return fruit.type === "fruit";
});

console.log(fruits);
// TO DO: filter through the array of objects and return all vegetable type
// objects.

const vegetal = fruitsAndVeggies.filter(function(vegetable){
    return vegetable.type === "vegetable";
});

console.log(vegetal);
/*********************************************
 *              .reduce
 ******************************************** */


const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0);
//
// console.log(sum);
//accumulation = 0
//add 1
//accumulation = 1
//add 2
//accumulation = 3
//add 3
//accumulation = 6
// ad 4
//accumulation = 10
//add 5
//accumulation = 15

//final accumulation = 15.

// const numbers = [1, 2, 3, 4, 5];


// TO DO TOGETHER: Let's reduce our original numbers Array into one single
// value.

// TO DO: Using .reduce, subtract all numbers in the numbers Array from a
// starting point of 100.

const sum = numbers.reduce((accumulation, currentNumber) => {
    return accumulation - currentNumber;
}, 100);


console.log(sum);
var shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

// TO DO: Using .reduce, return the total number of apples.

const totalApples = shoppingCarts.reduce(function(total, cart){
    return total + cart.apples;
},0);

console.log(totalApples);

// TO DO TOGETHER: let's use .reduce to return an object that has properties
// representing total values for each fruit.

const colors = ['red','orange','red','blue','blue','green','red'];

function countColors(color) {
     // transform a sentence into an array of words
    const colorCountObject = colors.reduce((colorCounts, color) => {
        if (typeof colorCounts[color] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            colorCounts[color] = 1;
        } else {
            // otherwise increment the existing count
            colorCounts[color] += 1;
        }
        return colorCounts;
    }, {}); // start with an empty object
    return colorCountObject;
}

console.log(countColors(colors));



const lyrics = ['we','all','live','in','a','yellow','submarine'];


//TO DO TOGETHER: Using reduce, let's turn this into a string.
const oneLine = lyrics.reduce(function(currentString, word){
    return `${currentString} ${word}`
}, "");

console.log(oneLine);

// Bonus: Create an Array of all the unique fur colors!
var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

