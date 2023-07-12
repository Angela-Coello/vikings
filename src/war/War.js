class War {
 constructor (){
    this.vikingArmy = [];
    this.saxonArmy = [];
 }
    addViking(Viking) {
     this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
      this.saxonArmy.push(Saxon);
     }
    
 }
module.exports = War;
