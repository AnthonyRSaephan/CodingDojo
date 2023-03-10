public class Soda : Drink{
    public bool isDiet;

    public Soda(string name, string color, double temp, bool isCarb, int calories, bool isDiet) : base(name, color, temp, isCarb, calories){
        this.isDiet = isDiet;
    }

    public override void showDrink()
    {
        base.showDrink();
        System.Console.WriteLine($"Diet?: {this.isDiet}");
    }
}