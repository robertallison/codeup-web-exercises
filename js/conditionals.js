"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
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

  /*  function analyzeColor(color,){
    var color = prompt("Please input a color of the rainbow");
        if (color == "red"){
            console.log("Red is the color of apples")
        } else if(color == "orange"){
            console.log("Orange is the color of oranges")
        } else if(color == "yellow"){
            console.log("Yellow is the color of bananas")
        } else if(color == "green"){
            console.log("Green is the color of grass")
        } else if(color == "blue") {
            console.log("Blue is the color of the ocean")
        } else if(color == "indigo"){
            console.log("Indigo is close to the color of blueberries")
        } else if(color == "violet"){
            console.log("Violet is the color of weird purple")
        } else {
            console.log("I'm sorry but I do not know this color.")
        }
}
    analyzeColor();
    */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

  /*  function analyzeColors(randomColor) {
        var choice = randomColor
        console.log(choice);
    switch(choice) {
        case "red":
            alert("Red is the color of apples");
            break;
        case "orange":
            alert("Orange is the color of oranges");
            break;
        case "yellow":
            alert("Yellow is the color of bananas");
            break;
        case "green":
            alert("Green is the color of grass");
            break;
        case "blue":
            alert("Blue is the color of the ocean");
            break;
        case "indigo":
            alert("Indigo is kind of the color of blueberries");
            break;
        case "violet":
            alert("Violet is the color of weird purple");
    }
}

        analyzeColors(randomColor);

    */
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
/* var newColor = prompt("Pick your favorite color from the rainbow")
alert(analyzeColors(newColor));
*/

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
   /*     function calculateTotal(){
          var luckyNumber = Math.floor(Math.random() * 6);
            var betterLucky = parseInt(luckyNumber);
            var fullPrice = prompt("What is the full price of your purchase?")
            var betterPrice = parseFloat(fullPrice);
                switch(betterLucky){
                    case 1:
                        alert("New price is $" + betterPrice*.9);
                        break;
                    case 2:
                        alert("New price is $" + betterPrice*.75);
                        break;
                    case 3:
                        alert("New price is $" + betterPrice*.65);
                        break;
                    case 4:
                        alert("New price is $" + betterPrice*.5);
                        break;
                    case 5:
                        alert("Congrats, its all free");
                        break;
            }
}
        calculateTotal();

        */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 //Generate a random number between 0 and 6
 //var luckyNumber = Math.floor(Math.random() * 6);

//I just combined above with this one

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
 * HINT: The way we prompt for a value could be improved
 */

var confirmNum = confirm("Please press OK if you would like to enter a number, otherwise press Cancel");
if (confirmNum === true) {
    var number = prompt("Please type your number:")
    var betterNum = parseFloat(number);
    var hundredNum = betterNum + 100;
    if (isNaN(number)==0) {
        if (betterNum % 2 === 0) {
            if (betterNum < 0) {
                alert("Your number is even, negative, and your number plus 100 is " + hundredNum);
            } else {
                alert("Your number is even, positive, and your number plus 100 is " + hundredNum)
            }
        } else {
            if (betterNum < 0) {
                alert("Your number is odd, negative, and your number plus 100 is " + hundredNum)
            } else {
                alert("Your number is odd, positive, and your number plus 100 is " + hundredNum);
            }
        }
    } else {
        alert("Please input a real number")
    }
} else {
    alert("No worries, have a nice day");
}