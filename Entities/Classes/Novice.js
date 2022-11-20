import Entity from '../Entity.js'

export default class Novice extends Entity {
	constructor(data) {
		super(data);
		this.dmgType = 'physical';
		this.speed = 2;
        this.className = 'Novice'; 
	}
}