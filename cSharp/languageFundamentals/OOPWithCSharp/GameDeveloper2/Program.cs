MeleeFighter warrior = new MeleeFighter("Warrior");
RangedFighter archer = new RangedFighter("Archer");
MagicCaster mage = new MagicCaster("Mage");

warrior.PerformAttack(archer, warrior.attackList[1]);
warrior.rage(mage);
archer.PerformAttack(warrior, archer.attackList[0]);
archer.dash();
archer.PerformAttack(warrior, archer.attackList[0]);
mage.PerformAttack(warrior, mage.attackList[0]);
mage.heal(archer);
mage.heal(mage);
archer.PerformAttack(warrior, archer.attackList[0]);
archer.PerformAttack(warrior, archer.attackList[0]);
archer.PerformAttack(warrior, archer.attackList[0]);
archer.PerformAttack(warrior, archer.attackList[0]);
archer.PerformAttack(warrior, archer.attackList[0]);