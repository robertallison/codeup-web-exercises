console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var favColor = prompt("What is your favorite color?");
alert("Awesome! " + favColor + " is my favorite color too!");


var firstMovie = prompt("How many days did you rent the first movie?");
var secMovie = prompt("How many days did you rent the second movie?");
var thirdMovie = prompt("How many days did you rent the third movie?");
var price = prompt("What was the price of one rental per day?");
var total = (parseInt(firstMovie) + parseInt(secMovie) + parseInt(thirdMovie)) * parseInt(price);
alert("Your total price will be $" + total);

var Google = prompt("How much do you earn an hour at Google?");
Google = parseInt(Google);
var hoursGoogle = prompt("How many hours did you work at Google this week?");
hoursGoogle = parseInt(hoursGoogle);
var Amazon = prompt("How much do you earn an hour at Amazon?");
Amazon = parseInt(Amazon);
var hoursAmazon = prompt("How many hours did you work at Amazon this week?");
hoursAmazon = parseInt(hoursAmazon);
var Facebook = prompt("How much do you earn an hour at Facebook?");
Facebook = parseInt(Facebook);
var hoursFacebook = prompt("How many hours did you work at Facebook this week?");
hoursFacebook = parseInt(hoursFacebook);
var totalPaycheck = Google*hoursGoogle + Amazon*hoursAmazon + Facebook*hoursFacebook
alert("Wow! You made $" + totalPaycheck + " this week!")

