export default class Weapon {
     constructor(data) {
    }
    
    /**
     * Randomly determines the damage value of the weapon based on min/max damage of the weapon.
     * @returns {number}
     */
    swingPower () {
        return Math.floor(Math.random() * (this.maxDmg - this.minDmg) + this.minDmg);
    }
}
