// console.log("Hello World!");

//[SECTION] Array
//An array is also a storage for multiple elements/values
//The beast practice is values/elements stored in an array should be of the same data type.

let pokemon = ["Pikachu", "Charmander", "Mewtwo"];
console.log(pokemon);

console.log(pokemon[0]);
console.log(pokemon[2]);

console.log(`My favorite pokemon is ${pokemon[0]}`);
console.log(`My favorite pokemon is ${pokemon[0].toLocaleUpperCase()}`);

console.log(pokemon.length);

pokemon[3] = "Bulbasaur";
console.log(pokemon);
console.log(pokemon.length);

pokemon[1] = "Charmeleon";

console.log(pokemon);
console.log(pokemon.length);

pokemon[10] = "Meow"; //Adding a new element to the array at index 10, which creates empty slots in between
console.log(pokemon);
console.log(pokemon.length);

// Add an element on the tail

console.log(pokemon.length);
pokemon[pokemon.length] = "Snorlax";

console.log(pokemon);
console.log(pokemon.length);

//Access th(e last element on the array
console.log(pokemon[pokemon.length - 1]); 


//[SECTION] Modern Array Mutation Methods
let fruits = ["Apple", "Banana", "Melon"];

// push()-> add an element on the tail of an array
console.log("Original Array: " + fruits);
fruits.push("Strawberry");
console.log("Push Method: " + fruits);

//pop() -> remove an element on the tail of an array
fruits.pop(); //strawberry -> removed
fruits.pop(); //melon -> removed
console.log("Pop Method: " + fruits);

//unshift() -> adds an elements on the head part of the array
console.log("Original Array: " + fruits);
fruits.unshift("Strawberry");
console.log("Unshift Method: " + fruits);

fruits.unshift("Grapes", "Melon", "Kiwi");
console.log("Unshift Method 2: " + fruits);

//shift() -> removes an element on the head part of the array
fruits.shift();
fruits.shift();
console.log("Shift Method: "  + fruits);

//sort() -> sorts elements in an array
fruits.sort();
console.log(fruits);

//reverse() -> sorts elements in reverse manner
fruits.reverse();
console.log(fruits);

//splice() -> adds/removes an element on a specific index
fruits.splice(1, 2, "Blueberry");
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

//forEach() -> read each elements in an array
fruits.forEach((x) =>  {
    console.log(x);
})