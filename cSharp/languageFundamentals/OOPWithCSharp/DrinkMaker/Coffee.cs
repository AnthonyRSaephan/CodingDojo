public class Coffee : Drink{
    public string roast;
    public string beanType;

    public Coffee(string name, string color, double temp, bool isCarb, int calories, string roast, string beanType) : base(name, color, temp, isCarb, calories){
        this.roast = roast;
        this.beanType = beanType;
    }

    public override void showDrink()
    {
        base.showDrink();
        System.Console.WriteLine($"Roast: {this.roast} Bean type: {this.beanType}");
    }
}