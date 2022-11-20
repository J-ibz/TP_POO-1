import Weapon from "./Weapon.js"

export default class WoodBow extends Weapon{
    constructor (data) {
        super (data)
        this.minDmg = 2;
        this.maxDmg = 4;
        this.name = 'Wood Bow'
    }
}