import Entity from '../Entity.js'

export default class Abaddon extends Entity {
	constructor(data) {
		super(data);
		this.ally = false;
		this.title = 'Angel of Destruction'
		this.armor = {
			name : `Abaddon's armor`,
			physicalDef : 3,
			magicalDef : 0.5,
			pierceDef : 0,
		}
		this.hitPoint = 500;
		this.deathLine = 'Abaddon says: Aaarghh I will come back stronger and harder'
	}

	/**
	 * 
	 * @param {object} dmg - contains type and value of the damage received
	 * @returns {string} - return lines corresponding to the damage  value/type received
	 */

    lines (dmg) {
		let line	
		if (dmg.type === 'physical') {
			if (dmg.value >= 0 && dmg.value <= 10) line = `says: Felt nothing peasent`;
			else if (dmg.value >= 11 && dmg.value <= 20) `says: Go harder kiddo`;
		}
		if (dmg.type === 'pierce') {
			if (dmg.value >= 0 && dmg.value <= 10) line = `says: Ho that felt good !?`;
		}
		if (dmg.type === 'magical') line = `says: Magic damages are reduced by half on me`;
        
		return console.log(this.name + ' ' + line)
    }
}