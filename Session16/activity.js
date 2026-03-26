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