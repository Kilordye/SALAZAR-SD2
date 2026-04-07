// console.log("Hell;o World!");

let friends = [];

function showFriends() {
    if(friends.length <= 0) {
        console.log("You don't have any friends yet.");
    }else{
        console.log(friends);
    }
}

function addFriend(name) {
    let checkFriend = friends.includes(name.toUpperCase());

    if(checkFriend == true) {
        console.log(`${name.toUpperCase()} is already on your friend list.`);
    }else{
        friends.push(name.toUpperCase());
        console.log(`You added ${name.toUpperCase()}.`);
    }
}

//Remove specific friend -> using their name
function removeFriend(name) {
    let index = friends.indexOf(name.toUpperCase);
    if (index !== -1) {
        friends.splice(index, 1);
        console.log(name +  is not in your friend list.`);
    } else {
        friends.splice(index, 1);
        console.log(`You removed ${upperName}.`);
    }
}