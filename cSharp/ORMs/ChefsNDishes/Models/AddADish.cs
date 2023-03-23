namespace ChefsNDishes.Models;
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;

public class AddADish
{
    public Dish Dish {get;set;}
    public List<Dish> Dishes {get;set;} = new List<Dish>();

    public Chef Chef {get;set;}
    public List<Chef> Chefs {get;set;} = new List<Chef>();
}