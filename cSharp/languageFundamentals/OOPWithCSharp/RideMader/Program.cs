Vehicle toyota = new Vehicle("Toyota", 5, "Black", true);
Vehicle bike = new Vehicle("Cycle", 1, "Blue", false);
Vehicle truck = new Vehicle("Ford", "Blue");
Vehicle van = new Vehicle("Toyota", "Red");

List<Vehicle> vehicles = new List<Vehicle>{toyota, bike, truck, van};
foreach(Vehicle vehicle in vehicles){
    vehicle.showInfo();
}
bike.travel(100);
bike.showInfo();
van.milesDriven = 350;
System.Console.WriteLine(van.milesDriven);
van.showInfo();