class Soldier {
    constructor(health, strenght) {
        this.health = health;
        this.strength = strenght;
    }
  attack() {
return this.strength;
  }

  receiveDamage (damage){
    this.health = this.health - damage
  }
}
 
 


module.exports = Soldier;
