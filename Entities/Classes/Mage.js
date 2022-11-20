import Entity from '../Entity.js'

export default class Mage extends Entity {
	constructor(data) {
		super(data);
		this.dmgType = 'magical';
		this.speed = 2;
        this.className = 'Mage'; 
	}
}