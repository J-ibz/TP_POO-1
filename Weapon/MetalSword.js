import Weapon from "./Weapon.js"

export default class MetalSword extends Weapon{
    constructor (data) {
        super (data)
        this.minDmg = 2;
        this.maxDmg = 6;
        this.name = 'Metal Sword'
    }
}
