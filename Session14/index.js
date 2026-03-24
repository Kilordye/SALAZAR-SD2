// This is how we print and output using JS
// console.log(stringContent | Variable)
console.log("Hello World!");

// To ise comment we to use //
// This is a single line comment

/*
This is a multi line comment
*/

// [SECTION 1: Variables]

// WHat is a variable?
// A variable is a container for storing data values. It allows us to store and manipulate information in our programs. Except for constant variables.
// How to declare a variable in JS?
// We can declare a variable using the var, let, or const keywords. The choice of keyword depends on the scope and mutability of the variable.

// DATA TYPES

// Numeric Data Types
/* 
let variableName; -> no initialized value
let variableName = value; -> initialized value


*/
let age = 25; // This is a variable
let height = 160; // This is a variable

console.log(age);
console.log(height);

// JS is a loose-type PL
console.
log(height);
console.  log  ( height);

// It doesnt matter how many spaces we put, it will still work. But it is a good practice to keep it consistent and readable. BECAUSE IT IS A PROGRAMMING LANGUAGE, NOT A WRITING LANGUAGE.

let gwa = 99.98; // This is a variable for GWA (General Weighted Average)
console.log(gwa);

// Character Data Types
let firstName = "John"; // This is a variable for storing a string value
console.log(firstName);

// typeof - to check the data type of a variable
console.log(typeof age);
console.log(typeof height);
console.log(typeof gwa);
console.log(typeof firstName);

// Text Casing in JS
// camelCase
// Snake_case
// PascalCase
// kebab-case
// Pascal-Kebab-Case

// Boolean Data Types
let isMarried = false;
let isRegistered = true;
let hasPassed = true;

console.log(isMarried);
console.log(isRegistered);
console.log(hasPassed);
console.log(typeof isMarried);
console.log(typeof isRegistered);
console.log(typeof hasPassed);

// Concaitenation - to combine two or more strings together

let province = "Laguna";
console.log("I am from " + province + " and my overall grade is " + gwa);
console.log("My height is " + height);

//  Type Coercion
//  Concatenation of string a number or other data types will result in a string