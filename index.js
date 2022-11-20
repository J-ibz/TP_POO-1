import Novice from './Entities/Classes/Novice.js';
import Tank from './Entities/Classes/Tank.js';
import Archer from './Entities/Classes/Archer.js';
import Mage from './Entities/Classes/Mage.js';
import Warrior from './Entities/Classes/Warrior.js';
import Abaddon from './Entities/Enemies/Abaddon.js'

import MetalSword from './Weapon/MetalSword.js';
import BrokenStaff from './Weapon/BrokenStaff.js';
import WoodBow from './Weapon/WoodBow.js';
import WoodStaff from './Weapon/WoodStaff.js';

class Manager {
	static baseTurnSpeed = 5000;

	constructor() {
		this.party = {
			novice : new Novice({ name: 'Michael', weapon: new BrokenStaff() }),
			tank : new Tank({ name: 'Gabriel', weapon: new MetalSword() }),
			archer : new Archer({ name: 'Raphaël', weapon: new WoodBow() }),
			mage : new Mage({ name: 'Lucifer', weapon: new WoodStaff() }),
			warrior : new Warrior({ name: 'Uriel', weapon: new MetalSword() })
		}
		this.enemies = {
			boss : new Abaddon({ name : 'Abaddon'}),
		}
	}

	OnCreation() {
		Object.values(this.enemies).forEach(enemy => enemy.greetings());
		Object.values(this.party).forEach(partyMember => partyMember.greetings());
	}

	OnAttack() {
		while (this.enemies.boss.hitPoint > 0) {		
		Object.values(this.party)
		.sort((a, b) => {
			if (a.speed == b.speed) {
				const randomNumber = Math.round(Math.random())
				if(randomNumber == 1) return -1
				else return 1
			}
			if (a.speed > b.speed) return -1 
			else return 1
		})
		.every(partyMember => {
			if (this.enemies.boss.hitPoint >= 0) {
				const netDmg = partyMember.attacks(this.enemies.boss)
				this.enemies.boss.lines(netDmg)
				this.enemies.boss.hitPoint -= netDmg.value 
				console.log(this.enemies.boss.hitPoint);
				return true
			} else if ((this.enemies.boss.hitPoint <= 0)){
				console.log(`%c${this.enemies.boss.deathLine}`,"color: red;")
				return false;
			}
		});
	}}
}

const battle = new Manager();

battle.OnCreation();
battle.OnAttack();
