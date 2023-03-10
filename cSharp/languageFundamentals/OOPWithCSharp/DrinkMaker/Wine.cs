public class Wine : Drink{
    public string region;
    public int yearBottled;

    public Wine(string name, string color, double temp, bool isCarb, int calories, string region, int yearBottled) : base(name, color, temp, isCarb, calories){
        this.region = region;
        this.yearBottled = yearBottled;
    }

    public override void showDrink()
    {
        base.showDrink();
        System.Console.WriteLine($"Region: {this.region} Year: {this.yearBottled}");
    }
}