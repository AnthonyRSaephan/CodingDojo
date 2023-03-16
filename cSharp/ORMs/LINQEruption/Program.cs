List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
//! Example Query - Prints all Stratovolcano eruptions
// IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
// PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");

// Execute Assignment Tasks here!
//! Use LINQ to find the first eruption that is in Chile and print the result.
// Eruption? firstInChile = eruptions.FirstOrDefault(e => e.Location == "Chile");
// System.Console.WriteLine(string.Join(", ", firstInChile));

//! Find the first eruption from the "Hawaiian Is" location and print it. If none is found, print "No Hawaiian Is Eruption found."
// Eruption firstHawaii = eruptions.FirstOrDefault(e => e.Location == "Hawaiian Is");
// if(firstHawaii != null)
// {
//     System.Console.WriteLine(firstHawaii);
// }
// else
// {
//     System.Console.WriteLine("No Hawaiian Is Eruption found.");
// }

//! Find the first eruption from the "Greenland" location and print it. If none is found, print "No Greenland Eruption found."
// Eruption fromGreenland = eruptions.FirstOrDefault(e => e.Location == "GreenLand");
// if(fromGreenland != null)
// {
//     System.Console.WriteLine(fromGreenland);
// }
// else
// {
//     System.Console.WriteLine("No GreenLand Eruption found.");
// }

//! Find the first eruption that is after the year 1900 AND in "New Zealand", then print it.
// Eruption eruption = eruptions.FirstOrDefault(e => e.Year > 1900 && e.Location == "New Zealand");
// System.Console.WriteLine(eruption);

//! Find all eruptions where the volcano's elevation is over 2000m and print them.
// IEnumerable<Eruption> filteredEruptions = eruptions.Where(e => e.ElevationInMeters > 2000);
// PrintEach(filteredEruptions);

//! Find all eruptions where the volcano's name starts with "L" and print them. Also print the number of eruptions found.
// IEnumerable<Eruption> allEruptions = eruptions.Where(e => e.Volcano.StartsWith("L"));
// PrintEach(allEruptions);
// System.Console.WriteLine(allEruptions.Count());

//! Find the highest elevation, and print only that integer (Hint: Look up how to use LINQ to find the max!)
// int highestElevation = eruptions.Max(e => e.ElevationInMeters);
// System.Console.WriteLine(highestElevation);

//! Use the highest elevation variable to find and print the name of the Volcano with that elevation.
// int highestElevation = eruptions.Max(e => e.ElevationInMeters);
// string name = eruptions.FirstOrDefault(e => e.ElevationInMeters == highestElevation).Volcano;
// System.Console.WriteLine(name);

//! Print all Volcano names alphabetically.
// List<string> alphabetical = eruptions.OrderBy(e => e.Volcano).Select(e => e.Volcano).ToList();
// System.Console.WriteLine(string.Join(", ", alphabetical));

//! Print the sum of all the elevations of the volcanoes combined.
// int sum = eruptions.Sum(e => e.ElevationInMeters);
// System.Console.WriteLine(sum);

//! Print whether any volcanoes erupted in the year 2000 (Hint: look up the Any query)
// Boolean any = eruptions.Any(e => e.Year == 2000);
// System.Console.WriteLine(any);

//! Find all stratovolcanoes and print just the first three (Hint: look up Take)
// IEnumerable<Eruption> first3 = eruptions.Take(3);
// PrintEach(first3);

//! Print all the eruptions that happened before the year 1000 CE alphabetically according to Volcano name.
// IEnumerable<Eruption> before1000CESortedByName = eruptions.Where(e => e.Year < 1000).OrderBy(e => e.Volcano);
// PrintEach(before1000CESortedByName);

//! Redo the last query, but this time use LINQ to only select the volcano's name so that only the names are printed.
List<string> before1000CESortedByName = eruptions.Where(e => e.Year < 1000).OrderBy(e => e.Volcano).Select(e => e.Volcano).ToList();
System.Console.WriteLine(string.Join(", ", before1000CESortedByName));


// Helper method to print each item in a List or IEnumerable. This should remain at the bottom of your class!
static void PrintEach(IEnumerable<Eruption> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (Eruption item in items)
    {
        Console.WriteLine(item.ToString());
    }
}
