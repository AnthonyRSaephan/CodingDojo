Soda pepsi = new Soda("Pepsi", "Blue", 40, true, 400, false);
Coffee starbucks = new Coffee("Starbucks", "Green", 100, false, 600, "Dark", "Macao");
Wine redWine = new Wine("Red Wine", "Red", 30, false, 250, "South Africa", 1996);
List<Drink> allBeverages = new List<Drink>(){pepsi, starbucks, redWine};
foreach(Drink drink in allBeverages){
    drink.showDrink();
}
Coffee MyDrink = new Soda("Pepsi", "Blue", 40, true, 400, false);
// Cannot convert type Soda to Coffee. Soda is a Drink but Soda is not Coffee