class Attack{
    string name;
    public string _name{
        get{
            return this.name;
        }
    }
    int damage;

    public Attack(string name, int damage){
        this.name = name;
        this.damage = damage;
    }
}