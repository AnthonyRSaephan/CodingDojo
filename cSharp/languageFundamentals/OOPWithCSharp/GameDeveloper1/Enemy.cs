class Enemy{
    string name;
    int health;
    public int _health{
        get{
            return this.health;
        }set{
            this.health = value;
        }
    }
    List<Attack> attackList;

    public Enemy(string name){
        this.name = name;
        this._health = 100;
        attackList = new List<Attack>();
    }

    public void randomAttack(){
        Random random = new Random();
        Attack randomAttack = this.attackList[random.Next(this.attackList.Count)];
        System.Console.WriteLine($"{this.name} uses attack {randomAttack._name}");
    }

    public void addAttack(Attack attack){
        this.attackList.Add(attack);
    }
}