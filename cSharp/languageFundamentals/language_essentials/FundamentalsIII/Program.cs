//! 1. Iterate and print values
static void PrintList(List<string> MyList)
{
    // for(int i = 0; i < MyList.Count; i++)
    // {
    //     System.Console.WriteLine(MyList[i]);
    // }

    // foreach(string element in MyList){
    //     System.Console.WriteLine(element);
    // }

    // MyList.ForEach(element => System.Console.WriteLine(element));

    System.Console.WriteLine($"{string.Join(", ", MyList)}");
}
List<string> TestStringList = new List<string>() {"Harry", "Steve", "Carla", "Jeanne"};
PrintList(TestStringList);

//! 2. Print Sum

static void SumOfNumbers(List<int> IntList)
{
    int sum = 0;
    foreach(int value in IntList){
        sum += value;
    }
    System.Console.WriteLine(sum);
}
List<int> TestIntList = new List<int>() {2,7,12,9,3};
// You should get back 33 in this example
SumOfNumbers(TestIntList);

//! 3. Find Max

static int FindMax(List<int> IntList)
{
    // Your code here
    int max = Int32.MinValue;
    foreach(int value in IntList){
        max = value > max ? value : max;
    }
    return max;
}
List<int> TestIntList2 = new List<int>() {-9,12,10,3,17,5};
// You should get back 17 in this example
System.Console.WriteLine(FindMax(TestIntList2));;

//! 4. Square the Values

static List<int> SquareValues(List<int> IntList)
{
    // Your code here
    for(int i = 0; i < IntList.Count; i++){
        IntList[i] = IntList[i] * IntList[i];
    }
    return IntList;
}
List<int> TestIntList3 = new List<int>() {1,2,3,4,5};
// You should get back [1,4,9,16,25], think about how you will show that this worked
List<int> newList = SquareValues(TestIntList3);
System.Console.WriteLine(string.Join(", ", newList));

//! 5. Replace Negative Numbers with 0
static int[] NonNegatives(int[] IntArray)
{
    // Your code here
    for(int i = 0; i < IntArray.Length; i++){
        if(IntArray[i] < 0){
            IntArray[i] = 0;
        }
    }

    return IntArray;
}
int[] TestIntArray = new int[] {-1,2,3,-4,5};
// You should get back [0,2,3,0,5], think about how you will show that this worked
System.Console.WriteLine(string.Join(", ", NonNegatives(TestIntArray)));

//! 6. Print Dictionary
static void PrintDictionary(Dictionary<string,string> MyDictionary)
{
    // Your code here
    foreach(KeyValuePair<string, string> entry in MyDictionary){
        System.Console.WriteLine($"{entry.Key} - {entry.Value}");
    }
}
Dictionary<string,string> TestDict = new Dictionary<string,string>();
TestDict.Add("HeroName", "Iron Man");
TestDict.Add("RealName", "Tony Stark");
TestDict.Add("Powers", "Money and intelligence");
PrintDictionary(TestDict);

//! 7. Find Key
static bool FindKey(Dictionary<string,string> MyDictionary, string SearchTerm)
{
    // Your code here
    return MyDictionary.ContainsKey(SearchTerm);
}
// Use the TestDict from the earlier example or make your own
// This should print true
Console.WriteLine(FindKey(TestDict, "RealName"));
// This should print false
Console.WriteLine(FindKey(TestDict, "Name"));

//! 8. Generate a Dictionary
// Ex: Given ["Julie", "Harold", "James", "Monica"] and [6,12,7,10], return a dictionary
// {
//	"Julie": 6,
//	"Harold": 12,
//	"James": 7,
//	"Monica": 10
// } 
static Dictionary<string,int> GenerateDictionary(List<string> Names, List<int> Numbers)
{
    // Your code here
    Dictionary<string, int> dict = new Dictionary<string, int>();
    for(int i = 0; i < Names.Count; i++){
        dict.Add(Names[i], Numbers[i]);
    }
    return dict;
}
// We've shown several examples of how to set your tests up properly, it's your turn to set it up!
// Your test code here
List<string> names = new List<string>(){"Julie", "Harold", "James", "Monica"};
List<int> numbers = new List<int>(){6,12,7,10};
Dictionary<string, int> result = GenerateDictionary(names, numbers);
foreach(KeyValuePair<string, int> entry in result){
    System.Console.WriteLine($"{entry.Key}: {entry.Value}");
}







