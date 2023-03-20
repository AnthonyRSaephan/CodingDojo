namespace CRUDelicious.Models;
using System.ComponentModel.DataAnnotations;
#pragma warning disable CS8618

public class Dish 
{
    [Key]
    public int DishId {get;set;}

    [Required]
    public string Name {get;set;}

    [Required]
    public string Chef {get;set;}

    [Required(ErrorMessage ="test")]
    [Range(1,5)]
    public int Tastiness {get;set;}

    [Required]
    [Range(1, Int32.MaxValue, ErrorMessage = "Calories must be above 0")]
    public int Calories {get;set;}

    [Required]
    public string Description {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;

    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}