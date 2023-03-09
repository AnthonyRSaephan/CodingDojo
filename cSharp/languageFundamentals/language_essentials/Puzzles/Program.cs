//! Coin Flip
static string coinFlip(){
    Random random = new Random();
    double randomNumber = random.NextDouble();
    if(randomNumber > .5){
        return "heads";
    }else{
        return "tails";
    }
}

System.Console.WriteLine(coinFlip());

//! Dice Roll
static int rollDie(int sides){
    Random random = new Random();
    int randomNumber = random.Next(1, sides+1);
    return randomNumber;
}

System.Console.WriteLine(rollDie(6));

//! Stat Roll
static int[] statRoll(int numRolls){
    int[] rolls = new int[numRolls];
    Random random = new Random();
    for(int i = 0; i < numRolls; i++){
        rolls[i] = rollDie(6);
    }
    return rolls;
}

int[] rolls = statRoll(4);
System.Console.WriteLine(string.Join(", ", rolls));
System.Console.WriteLine(rolls.Max());

//! Roll Until...
static void rollUntil(int target){
    if(target > 6 || target <= 0){
        System.Console.WriteLine("not possible");
        return;
    }
    int attempts = 0;
    int value = 0;
    while(value != target){
        value = rollDie(6);
        attempts++;
    }
    System.Console.WriteLine($"Rolled a {target} after {attempts} tries");
}

rollUntil(8);
rollUntil(3);

System.Console.WriteLine("What size of dice would you like to roll?:");
string response = Console.ReadLine();
int numberOfSides;
while(!Int32.TryParse(response, out numberOfSides)){
    System.Console.WriteLine("Please enter an integer:");
    response = Console.ReadLine();
}
System.Console.WriteLine($"You rolled: {rollDie(numberOfSides)}");

// response = null;
// System.Console.WriteLine("Would you like to roll again?");
// response = Console.ReadLine();
