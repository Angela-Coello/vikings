const Soldier = require("../soldier/Soldier.js");

 class Viking extends Soldier {

    constructor  (name, health, strenght) {
        super (health, strenght);
        this.name = name;
       
    }

    attack() {
        return this.strength;
    }

    receiveDamage (damage){
        
        this.health = this.health - damage
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }

        
    }

    
    battleCry() {
        return "Odin Owns You All!"
    }
  
    }
   

module.exports = Viking;
