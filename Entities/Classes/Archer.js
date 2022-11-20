import Entity from '../Entity.js'


export default class Archer extends Entity {
	constructor(data) {
		super(data);
		this.dmgType = 'pierce';
		this.speed = 5;
        this.className = 'Archer';
	}
}