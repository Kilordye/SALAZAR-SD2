// console.log("Hello World");

// Section [Repetition Control Structure]
// 1. do Loop

/*
SYNTAX: 
do (condition){
    // code to be executed
    // iteration statement
}

*/

let count = 0; 
while (count < 5) {
    console.log("Do loop:  " + count);
    count++;
}

//  1st Iteration: count = 0, condition is true, code is executed, count becomes 1
//  2nd Iteration: count = 1, condition is true, code is executed, count becomes 2
//  3rd Iteration: count = 2, condition is true, code is executed, count becomes 3
//  4th Iteration: count = 3, condition is true, code is executed, count becomes 4
//  5th Iteration: count = 4, condition is true, code is executed, count becomes 5
// Loop terminates because the condition is no longer true (count < 5)

// 2. do While Loop

/*
SYNTAX:
do {
    // code block
    // iteration statement


} while (condition)
*/

let score = 0;

do {
    console.log("DO-WHILE: " + score);
    score++;
} while (score < 5);

let score1 = 0;

do {
    console.log("DO-WHILE: " + score1);
    score1++;
} while (score1 <! 5);


// 3. For Loop
/*
SYNTAX: 

for (initialization; condition; iteration) {
    // code block to be executed
}

*/
// global hjindi nakakulong sa loob ng loop, hindi pwede gamitin sa labas ng loop
// let i is nakakulong sa loob ng loop, hindi pwede gamitin sa labas ng loop

for (let i = 0; i < 5; i++) {
    console.log("For Loop: " + i);
}

for (let i = 0; i < 10; i++) {
    if (i % 3 == 0) {
        console.log("COUNT: " + i + " is divisible by 3");
    } else {
        console.log("COUNT: " + i);
    }
}

// continue & break

for (let count = 0; count < 20; count++) {
    if (count == 18) {
        break;
    }
    console.log("COUNT: " + count);
}

let isRunning = true;
let accountLocked = 0;
let isLoggedIn = false;
let password = "hello123";

while(isRunning){
    if(accountLocked != 3){
        let input = prompt("Please enter your password.");
        if(input != password){
            console.log("Incorrect password. Chance: ", 2-accountLocked);
            accountLocked++;
        }else{
            isLoggedIn = true
            alert("Welcome, User!")
            isRunning = false;
        }
    }else{
        alert("Account is Locked! Please contact the admin.")
        isRunning = false;
    }
}

let input = parseInt(prompt("Please enter a number: "));

for(let i = 0; i <= input; i++){
    console.log(i);
}
























// 2. While Loop
// 3. Do-While Loop