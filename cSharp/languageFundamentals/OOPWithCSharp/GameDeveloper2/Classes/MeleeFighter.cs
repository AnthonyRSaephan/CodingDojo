class MeleeFighter : Enemy{



    public MeleeFighter(string name) : base(name){
        base.addAttack(new Attack("Punch", 20));
        base.addAttack(new Attack("Kick", 15));
        base.addAttack(new Attack("Tackle", 25));
        base._health = 120;
        base.maxHealth = 120;
    }

    public void rage(Enemy target){
        Random random = new Random();
        Attack chosenAttack = this.attackList[random.Next(attackList.Count)];
        chosenAttack.damage += 10;
        base.PerformAttack(target, chosenAttack);
        chosenAttack.damage -= 10;
    }
}