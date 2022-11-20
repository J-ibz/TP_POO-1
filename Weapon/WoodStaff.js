import Weapon from "./Weapon.js"

export default class WoodStaff extends Weapon{
    constructor (data) {
        super (data)
        this.minDmg = 50;
        this.maxDmg = 50;
        this.name = 'Wood Staff'
    }
}