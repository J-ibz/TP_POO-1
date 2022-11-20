import Weapon from "./Weapon.js"

export default class BrokenStaff extends Weapon{
    constructor (data) {
        super (data)
        this.minDmg = 1;
        this.maxDmg = 2;
        this.name = 'Broken Staff'
    }
}