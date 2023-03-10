class RangedFighter : Enemy {
    public int distance = 5;


    public RangedFighter(string name) : base(name){
        base.addAttack(new Attack("Shoot an Arrow", 20));
        base.addAttack(new Attack("Throw a Knife", 15));
        base.maxHealth = 100;
    }

    public override void randomAttack()
    {
        if(distance < 10){
            System.Console.WriteLine("Too far to perform an attack");
            return;
        }
        base.randomAttack();
    }

    public override void PerformAttack(Enemy Target, Attack ChosenAttack)
    {
        if(distance < 10){
            System.Console.WriteLine($"{this.name} is too far to perform attack");
            return;
        }
        base.PerformAttack(Target, ChosenAttack);
    }


    public void dash(){
        distance += 20;
    }
}