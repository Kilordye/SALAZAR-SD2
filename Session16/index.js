console.log("Hello World");

// Section [Selection Control Structure]
// 1. if-else else-if statement

// if statement
let age = 10;
if(age >= 18) {
    console.log("You are eligible for driver's license.");
} 

// if-else statement
let city = "Cebu";
if(city == "Manila") {
    console.log("Welcome to the Capital Region!");

} else {
    console.log("The selected Area is not in Manila");
}

// else-if statement
if (age >= 18 && city == "Cebu") {
    console.log("You can register for the event");
} else if (age <= 18 ) {
    console.log("You are not eligible to register for the event.");
} else {
    console.log("All Criteria not met.");
}

// Mini Example: User Role Access Control

// let role = prompt("Please Enter your Role:").toLocaleLowerCase();

// if (role == "admin") {
//     alert("Welcome Admin! Administrator.");    
// } else if (role == "teacher") {
//     alert("Welcome to UA portal, Faculty!.");
// } else if (role == "student") {
//     alert("Welcome to UA portal, Assumptionist!.");
// } else {
//     alert("Invalid Role. Access Denied.");
// }

// 2. Switch case statement
let day = 7;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;    
    default:
        console.log("Please Enter 1-5 only.");                      
}


// Mini Activity: Switch case statement for User Role Access Control

let position = prompt("Please Enter your position:").toLocaleLowerCase();
switch(position) {
    case "admin":
        alert("Welcome Admin! Administrator.");    
        break;
    case "teacher":
        alert("Welcome to UA portal, Faculty!.");
        break;
    case "student":
        alert("Welcome to UA portal, Assumptionist!.");
        break;
    default:
        alert("Invalid Role. Access Denied.");
}