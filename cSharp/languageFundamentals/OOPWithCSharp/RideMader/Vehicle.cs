class Vehicle{
    string name;
    int numberOfPassengers;
    string color;
    bool hasEngine;
    public int milesDriven {get;set;} = 0;
    
    
    public Vehicle(string name, int numberOfPassengers, string color, bool hasEngine){
        this.name = name;
        this.numberOfPassengers = numberOfPassengers;
        this.color = color;
        this.hasEngine = hasEngine;
    }

    public Vehicle(string name, string color){
        this.name = name;
        this.color = color;
        this.numberOfPassengers = 0;
        this.hasEngine = true;
    }

    public void showInfo(){
        System.Console.WriteLine($"{color} {name} holds {numberOfPassengers} people with {milesDriven} miles");
    }

    public void travel(int amount){
        milesDriven += amount;
        System.Console.WriteLine($"The vehicle has gone {milesDriven} miles");
        
    }
}