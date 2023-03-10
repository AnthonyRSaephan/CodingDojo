class Enemy
{
    public string name;
    int health = 100;
    public int maxHealth;
    public int _health
    {
        get
        {
            return this.health;
        }
        set
        {
            this.health = value;
        }
    }
    public List<Attack> attackList;

    public Enemy(string name)
    {
        this.name = name;
        this._health = 100;
        attackList = new List<Attack>();
    }

    public virtual void randomAttack()
    {
        Random random = new Random();
        Attack randomAttack = this.attackList[random.Next(this.attackList.Count)];
        System.Console.WriteLine($"{this.name} uses attack {randomAttack._name}");
    }

    public void addAttack(Attack attack)
    {
        this.attackList.Add(attack);
    }

    // Inside of the Enemy class
    public virtual void PerformAttack(Enemy Target, Attack ChosenAttack)
    {
        // Write some logic here to reduce the Targets health by your Attack's DamageAmount
        Target._health -= ChosenAttack.damage;
        Target._health = Target._health < 0 ? 0 : Target._health;
        Console.WriteLine($"{this.name} attacks {Target.name}, dealing {ChosenAttack.damage} damage and reducing {Target.name}'s health to {Target.health}!!");
    }


}