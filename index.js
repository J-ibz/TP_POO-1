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
		.forEach(partyMember => {
			while (this.enemies.boss.hitPoint > 0) {
				const rawDmg = partyMember.attacks(this.enemies.boss)
				this.enemies.boss.lines(rawDmg)
				this.enemies.boss.hitPoint -= rawDmg.value	
				if (this.enemies.boss.hitPoint - rawDmg.value < 1) console.log(this.enemies.boss.deathLine);
				this.enemies.boss.isAlive = false;
			}
		});
	}
}

const battle = new Manager();

battle.OnCreation();
battle.OnAttack();
