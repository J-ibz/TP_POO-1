export default class Entity {
	constructor(data) {
		this.ally = true;
		this.isAlive = true;
		this.name = data.name;
        this.level = data.level || 1;
		this.baseHP = 100 * this.level;
		this.baseDmg = 2 * this.level;
		this.weapon = data.weapon;
	}
	/**
	 * Fire a line
	 * @returns {string}
	 */
	greetings () {
		if (this.title) console.log(`My name is ${this.name}, ${this.title}`)
		else console.log(`My name is ${this.name}`);
	}

	/**
	 * Calc the total dmg allied character will do based on baseDmg + weapon damage then add this new value as new property to the class Instance.
	 * @returns {object}
	 */
	attacks (enemyTarget) {
		if (enemyTarget.armor && this.ally) {
			this.totalDmg = (this.baseDmg + this.weapon.swingPower())
			this.netDmg = {
				value : this.totalDmg,
				type : this.dmgType,
			}
			if (this.dmgType === 'physical') this.netDmg.value = this.totalDmg - enemyTarget.armor.physicalDef
			else if (this.dmgType === 'magical') this.netDmg.value = this.totalDmg * enemyTarget.armor.magicalDef;
			else if (this.dmgType === 'pierce') this.netDmg.value = this.totalDmg - enemyTarget.armor.pierceDef;

			console.log(`[${this.className}] - ${this.name}: inflict ${this.netDmg.value} ${this.dmgType} damage with ${this.weapon.name}`)

			return this.netDmg;
		}
	}
}