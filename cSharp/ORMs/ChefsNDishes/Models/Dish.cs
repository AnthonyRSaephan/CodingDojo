namespace ChefsNDishes.Models;
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;

public class Dish
{
    [Key]
    public int DishId { get; set; }

    public string Name {get;set;}

    [Range(1, Int32.MaxValue)]
    public int Calories {get;set;}
    public int Tastiness {get;set;}

    public int ChefId {get;set;}
    public Chef? Chef {get;set;}
}