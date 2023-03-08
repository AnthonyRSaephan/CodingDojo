//! Three Basic Arrays
// int[] intArray = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
string[] names = { "Tim", "Martin", "Nikki", "Sara" };
// bool[] booleans = new bool[10];
// for (int i = 0; i < booleans.Length; i++)
// {
//     if (i % 2 == 0)
//     {
//         booleans[i] = true;
//     }else{
//         booleans[i] = false;
//     }
// }
// foreach(bool boolean in booleans){
//     System.Console.WriteLine(boolean);
// }

//! List of Flavors
List<string> flavors = new List<string>(){"Chocolate", "Strawberry", "Coconut", "Mint Chip", "Peanut Butter"};
// System.Console.WriteLine(flavors.Count);
// System.Console.WriteLine(flavors[2]);
// flavors.RemoveAt(2);
// System.Console.WriteLine(flavors.Count);
// foreach(string flavor in flavors){
//     System.Console.WriteLine(flavor);
// }

//! User Dictionary
Dictionary<string, string> dictionary = new Dictionary<string, string>();
Random random = new Random();
foreach(string name in names){
    dictionary.Add(name, flavors[random.Next(0, flavors.Count)]);
}

foreach(KeyValuePair<string, string> entry in dictionary){
    System.Console.WriteLine($"{entry.Key} likes {entry.Value}");
}