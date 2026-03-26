// [SECTION] Funtion with Parameters
/*
SYNTAX:

function functionNAme (param1. param1, ...) {
    // code block
}

*/

function greeting() {
    let userInput = prompt("Please enter your name: ");
    console.log("Hello " + userInput);
}

// Function with Parameters
// (name) is the parameter of the function
// Parameter acts as a storage or variable for a specific function.

function sayHello(name) {
    console.log("Hello from function with parameters: " + name);
}

// sayHello(argument) -> is to be passed in the function parameter
sayHello("Mica")

// Multiple Parameters
function completeName(firstName, middleName, lastName){
    console.log('Hello, ${firstName} ${middleName} ${lastName}!');
}

completeName("Mica", "Lany", "Panday"); 
completeName("Mica", "Lany", "Panday", "Extra Argument"); //Extra

//Function and Return Statement
function print() {
    console.log("Hello, World!");
    return "Hello, World!"; //Return statement is used to return a value to be passed outside the function 
}

print();

let sum = function(num1, num2) {
    let total = num1 + num2;
    console.log("TOTAL: " + total);
    return total;
}

let result = sum(40, 45);
console.log(result);

checkRemarks(result);
// sum(10, 25); // This will print "Total: 35" to the console

// if (sum >= 30) {
//     console.log("Passed!");
// }else{
//     console.log("Failed!");
// }

function checkRemarks(score){
    if(score >= 75){
        console.log("Congrats, you have passed!");
    }else{
        console.log("Better luck next life!");
    }
}

let registration(getName, age){
    if(age <= 17){
        console.log("Sorry, you cannot register.");
    }else{
        console.log('${name} please proceed to the next step');
        return age;
    }
}

let value = registration("Paul Klein" , 26);
console.log("Age: " + value);

function checkAge(age) {
    if(age <= 17){
        console.log("You cannot proceed!");
    }else if (age <= 30){
        console.log("You can apply for basic account.")
    }else{
        console.log("You can apply for premium account.")
    }
}
