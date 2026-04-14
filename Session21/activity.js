function Pokemon(name, level, health, mana) {
    this.name = name;
    this.level = level;
    this.health = health * level;
    this.mana = mana;
    this.maxHealth = health * level;
    this.maxMana = 100;


    this.tacle = function(target) {
        let damage = 20;
        let actualDamage = Math.min(damage, target.health);
        console.log(`${this.name} uses Tackle on ${target.name}!`);
        target.health -= actualDamage;
        console.log(`${target.name} took ${actualDamage} damage. Health: ${target.health}/${target.maxHealth}`);
    }

    this.skill = function(target) {
        if(this.name == "Pikachu") {
            if(this.mana < 50) {
                console.log(`${this.name} does not have enough mana. Mana: ${this.mana}/50`);
            } else {
            let damage = 150;
            let actualDamage = Math.min(damage, target.health);
            console.log(`${this.name} used THUNDERBOLT`);
            target.health -= actualDamage;
            this.mana -= 50;
            console.log(`${target.name} took ${actualDamage} damage. Health: ${target.health}/${target.maxHealth}`);
            console.log(`${this.name} mana: ${this.mana}/${this.maxMana}`);
            }
        } else if (this.name == "Charmander") {
            if(this.mana < 50) {
                console.log(`${this.name} does not have enough mana. Mana: ${this.mana}/50`);
            } else {
                let damage = 150;
                let actualDamage = Math.min(damage, target.health);
                console.log(`${this.name} used FLAMETHROWER`);
                target.health -= actualDamage;
                this.mana -= 50;
                console.log(`${target.name} took ${actualDamage} damage. Health: ${target.health}/${target.maxHealth}`);
                console.log(`${this.name} mana: ${this.mana}/${this.maxMana}`);
            }
        }
    }

        this.heal = function() {
        let healAmount = 100;
            let actualHeal = Math.min(healAmount, this.maxHealth - this.health);

        if (actualHeal === 0) {
                console.log(`${this.name} used a potion, but is already at full health. Health: ${this.health}/${this.maxHealth}`);
        } else {
            this.health += actualHeal;
                console.log(`${this.name} used a potion and restored ${actualHeal} health. Health: ${this.health}/${this.maxHealth}`);
        }
    }

// MANA RESTORE FUNCTION
    this.manaRestore = function() {
        let manaAmount = 50;
        if (this.mana + manaAmount > this.maxMana) {
            this.mana = this.maxMana;
            console.log(`${this.name} is fully restored! Mana: ${this.mana}/${this.maxMana}`);
        } else {
            this.mana += manaAmount;
            console.log(`${this.name} restored ${manaAmount} mana points! Mana: ${this.mana}/${this.maxMana}`);
        }
    }
}



console.log("Welcome to the Pokemon Battle Simulator!");
let pikachu = new Pokemon("Pikachu", 5, 100, 10);
let charmander = new Pokemon("Charmander", 5, 100, 10);

pikachu.tacle(charmander);
pikachu.tacle(charmander);
charmander.tacle(pikachu);

charmander.skill(pikachu);
pikachu.skill(charmander);

pikachu.heal();
pikachu.heal();
pikachu.heal();

pikachu.manaRestore();

pikachu.skill(charmander);
pikachu.tacle(charmander);
pikachu.skill(charmander);
charmander.tacle(pikachu);
charmander.skill(pikachu);

charmander.manaRestore();

charmander.skill(pikachu);

pikachu.heal();

charmander.heal();
