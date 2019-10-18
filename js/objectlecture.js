var rubberDuck= {
    color: "yellow",
    role: "Emotional support",
    name: "cody"
};

console.log(rubberDuck);





//TO DO TOGETHER: We are going to add functionality to our phone Object.
//* Using the dot notation, add a method named 'call' that console logs the
//* message: "Dialing..."
//*/


var myPhone= {};

myPhone.model ="iPhone XS";
myPhone.color = "gold";
myPhone.storange = "4GB";

console.log(myPhone);

//TO DO: Using dot notation, assign these properties to your Mac
// * Object: 'model', 'size', 'year', Console log the Object to check if the
// * information was stored properly

var myMac = {};

myMac.model = "Macbook Pro";
myMac.size = "13 inches";
myMac.year = "2015";

console.log(myMac);

// TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
// * type Object and store properties for the user's 'firstName' and
// * 'lastName'. Use console log to access the user's 'lastName'

myPhone.name = {
    firstName: "Karli",
    lastName: "Steeves"
};

// console.log(myPhone.name.lastName);

//TO DO: Using dot notation, assign a property called 'folders' that stores
// * an Array representing different folders in your system.

myMac.folders = ["Camera Roll", "Downloads", "Pictures", "Favorites"];

console.log(myMac);

function myApps(){
    console.log("These are my apps:");
    myMac.folders.forEach(function(folder){
        console.log(folder);
    });
    return "Did you find what you were looking for?";
}

myApps(myMac.folders);

//* TO DO: Assign a 'login' property. This should be an object that stores
// * 'username','fakePassword' and 'email'


myMac.login = {
    userName: "gnarlikarli",
    passWord: "sevenwonders",
    email: "ksteeves@codeup.com"
};

console.log(myPhone);
console.log(myMac);

//* TO DO TOGETHER: We are going to add functionality to our phone Object.
// * Using the dot notation, add a method named 'call' that console logs the
// * message: "Dialing..."
// */
myPhone.call = function(){
    console.log("dialing...");
};

console.log(myPhone.call());
///**
// * TO DO: Let's add functionality to our Mac Object. Create a method named
// * 'powerOn'. When called, this should display a console message that says
// * "Powering on..."
// */
myMac.powerOn = function (){
    console.log("Powering on...");
};

console.log(myMac.powerOn());
///**
// * TO DO TOGETHER: Let's add one more piece of functionality. Create a
// * method on the phone object that returns a message displaying the user's
// * firstName and lastName. Hint: use the 'this' keyword.
// */

myPhone.currentUser = function(){
    console.log("Current user: " + this.name.firstName+ " " +this.name.lastName);
};

///**
// * TO DO: One last thing. Let's add a 'currentUser' method that displays the
// * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
// * the properties we created earlier.
// */

myMac.currentUser = function(){
    console.log("Current user: " + this.login.userName+ " " +this.login.email);
};