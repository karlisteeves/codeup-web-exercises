
//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.


let wait = function (num) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve();
        }, num);
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


//Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last
// commit that user made. Reference the github api documentation to achieve this.


let p = new Promise((resolve, reject) => {
    let a = 1 + 4;
    if (a == 2){
        resolve('Success')
    }else{
        reject('Failed')
    }
});

p.then((message) =>
{
    console.log('This is in the THEN ' + message)
}).catch((message) => {
    console.log('This is in the CATCH ' + message)
});


//Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last
// commit that user made. Reference the github api documentation to achieve this.



//create a function
//function will accept a github username
//function will return a promise
//promise resolves = last date of a commit



function getLastCommit(username) {
    return new Promise(function (resolve, reject) {
        resolve(fetch("https://api.github.com/users/" + username + " /events", {headers: {'Authorization': `token ${promisesKey}`}}))

    })
        .then(response => response.json())
        .then (users => users.map(user => user.created_at).find(user => "PushEvent"));
}
console.log(getLastCommit("karlisteeves"));

// lastDate.then() =>{
//     console.log('This is the date of the last commit this user has made: ')
// }.catch()=> {
//     console.log('Something went wrong.')
// };

//Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.

const compareToTen = (num) => {
    p = new Promise((resolve, reject) => {
        if(num > 10) {
            resolve(num + " is greater than 10, success!")
        } else {
            reject(num + " is less than 10, error!")
        }
    })
    return p
}

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareToTen(6)
    .then(result => console.log(result))
    .catch(error => console.log(error))
