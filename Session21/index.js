// console.log("Hello World");

// [SECTION] JavaScript Object
// Imitates real-world description and real-world objects

let arr = [1, 2, 3];

let obj = {
    name: "Carl",
    age: 20
}

console.log(typeof arr);
console.log(typeof obj);

let person = {
    completeName: "Carl Dominik Salazar",
    age: 20,
    height: 175,
    weight: 55,
    contactNumber: [1234, 4567],
    address: {
        houseNo: 1,
        brgy: "Del Rosario",
        city: "CSFP"
    }
}

console.log(person);

// Dot notation 
// Access values inside an object property

console.log(person.completeName);

console.log(`Hi, my name is ${person.completeName} and I am ${person.age} years old.`);

console.log(person['completeName']);

// Updating a value via dot notation
person.completeName = "John Cena";

console.log(person);

// Adding a property inside an object
person.email = "cde@mail.com";

console.log(person);

// Class and Objects
// to add properties in a class use "this" keyword
function Animal(name, breed, color, kind) {
    // constructors
    this.name = name;
    this.kind = kind;
    this.breed = breed;
    this.color = color;
    this.makeSound = function() {
        if(this.kind == "dog") {
            console.log("Woof! Arf!");
        } else if (this.kind == "cat") {
            console.log("Mew two!");
        } else {
            console.log("Cannot be!");
        }
    };
    this.color = color;
}

// Instance -> copy/duplicate of a function class 

let dog = new Animal("Bruno Mars", "Askal", "BlackPink", "Dog");
console.log(dog);
console.log(dog.name);
dog.makeSound();

let cat = new Animal("Ed Sheeran", "Persian", "Yellow", "Cat");
console.log(cat);
console.log(cat.name);
cat.makeSound();

let trex = new Animal("Rex", "Dino", "Green", "Dinasour");
console.log(trex);
console.log(trex.name);
trex.makeSound();

console.log(person.contactNumber[1]);
console.log(person.address.brgy);

// [SECTION] Pokemon

function Pokemon(name, level, health, mana) {
    this.name = name;
    this.level = level;
    this.health = health * level;
    this.mana = mana;

    this.tackle = function(target) {
        let damage = 20;
        console.log(`${this.name} used tackle attack!`);
        target.health -= damage;
    }

    this.useSkill = function(target) {
        if(this.name == "NinjaGo"){
            if(this.mana < 50){
                console.log(`${this.name}'s mana is not enough! mana: ${this.mana}`);
            }
            let damage = 150;
            console.log(`${this.name} used Ninjutsu!`);
            target.health -= damage;
            this.mana -= 50;
            console.log(`${this.name} mana: ${this.mana}. ${target.name} health: ${target.health}`);
        } else if (this.name == "Mewtwo"){
            if(this.mana < 50){
                console.log(`${this.name}'s mana is not enough! mana: ${this.mana}`);
            }
            let damage = 250;
            console.log(`${this.name} used Necrozma!`);
            target.health -= damage;
            this.mana -= 50;
            console.log(`${this.name} mana: ${this.mana}. ${target.name} health: ${target.health}`);
        }
    }
    // Healing Function Without Exceeding Max Health
    this.heal = function() {
    let healAmount = 100;
    if (this.health = healAmount > 100 * level) {
        console.log(`${this.name} used Heal Potion to restore health! health: ${this.health}`);
    } else {
        this.health += healAmount;
        console.log(`${this.name} healed for ${healAmount} points! health: ${this.health}`);
        }
    }
// MANA RESTORE FUNCTION
    this.restoreMana = function() {
        let manaAmount = 50;
        if (this.mana + manaAmount > 100) {
            this.mana = 100;
            console.log(`${this.name} is fully restored! Mana: ${this.mana}`);
        } else {
            this.mana += manaAmount;
            console.log(`${this.name} restored ${manaAmount} mana points! Mana: ${this.mana}`);
        }
    }
}


let NinjaGo = new Pokemon("NinjaGo", 5, 100, 100);
console.log(NinjaGo);

let Mewtwo = new Pokemon("Mewtwo", 5, 100, 100);
console.log(Mewtwo);

NinjaGo.tackle(Mewtwo);
NinjaGo.tackle(Mewtwo);
NinjaGo.tackle(Mewtwo);

console.log(Mewtwo);

Mewtwo.tackle(NinjaGo);
Mewtwo.tackle(NinjaGo);
Mewtwo.tackle(NinjaGo);

console.log(NinjaGo);

// NinjaGo attacked
NinjaGo.useSkill(Mewtwo);
// Mewtwo attacked
Mewtwo.useSkill(NinjaGo);
// NinjaGo heal and restore mana
NinjaGo.heal();
NinjaGo.restoreMana();

