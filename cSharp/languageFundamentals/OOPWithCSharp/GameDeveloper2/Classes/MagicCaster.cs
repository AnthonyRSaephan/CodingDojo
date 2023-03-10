class MagicCaster : Enemy {



    public MagicCaster(string name) : base(name){
        base.addAttack(new Attack("Fireball", 25));
        base.addAttack(new Attack("Lightning Bolt", 20));
        base.addAttack(new Attack("Staff Strike", 10));
        base._health = 80;
        base.maxHealth = 80;
    }

    public void heal(Enemy target){
        target._health += 40;
        target._health = target._health + 40 > target.maxHealth ? target.maxHealth : target._health + 40;
        System.Console.WriteLine($"{target.name} now has {target._health} health");
    }
}