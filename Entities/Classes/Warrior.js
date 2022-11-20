import Entity from '../Entity.js'

export default class Warrior extends Entity {
	constructor(data) {
		super(data);
		this.dmgType = 'physical';
		this.speed = 4;
		this.className = 'Warrior';
	}
}