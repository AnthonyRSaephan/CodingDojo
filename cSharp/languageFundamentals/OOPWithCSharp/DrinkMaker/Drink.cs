public class Drink
{
    public string Name;
    public string Color;
    public double Temperature;
    public bool IsCarbonated;
    public int Calories;

    // We need a basic constructor that takes all these features in
    public Drink(string name, string color, double temp, bool isCarb, int calories)
    {
        Name = name;
        Color = color;
        Temperature = temp;
        IsCarbonated = isCarb;
        Calories = calories;
    }

    public virtual void showDrink(){
        System.Console.WriteLine($"{this.Color} {this.Name} at {this.Temperature} is carbonated: {this.IsCarbonated} Calories: {this.Calories}");
    }
}

