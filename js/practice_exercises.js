
/*function tellFortune (numChildren, partnerName, geoLocation, jobTitle){

    var output = "You will have " + numChildren + " children"

    console.log(output);
    return output

}
*/



/* function calculateDogAge() {
    var dogAge = prompt("How old is your dog in human years?");
    var humanAge = dogAge * 7;
    alert("Your dog is " + humanAge + " years old in dog years!");
}
calculateDogAge();
*/


//try and use str.include
// function tacoTuesday(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].includes("taco")) {
//             return true;
//         }
//     }
//     return false;
//}


//TODO: Finish coding this program. You need to stop the setInterval() method after the showTime() function has run five times


// let count = 0;
//
// function showTime() {
//
//     // return new date and time
//     let dateTime = new Date();
//
//     // return the time
//     let time = dateTime.toLocaleTimeString();
//
//     count += 1;
//
//     //if the count reaches 5, stop the program.
// if (count > 5) {
//     clearInterval(display);
// } else {
//     console.log(time)
// }
// }
//
// let display = setInterval(showTime, 5000);


// function greet(){
//     console.log("Hello World!");
// }
// var delayedGreeting = window.setTimeout(greet, 3000);
// window.clearTimeout(delayedGreeting)


// function logEvens() {
//     var loopNum = prompt("Please input a whole number")
//     for (var i = 0; i < loopNum; i++) {
//         console.log("please work")
//     }
// }

//class version of this function
function logEvens(num){
    for (var i = 0; i <= num; i++) {
        if(i % 2 === 0 && i !==0) {
            console.log(i);
        }
    }
}