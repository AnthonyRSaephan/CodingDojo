namespace ChefsNDishes.Models;
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;

public class Chef
{
    [Key]
    public int ChefId { get; set; }

    public string FirstName {get;set;}
    public string LastName {get;set;}

    [DataType(DataType.Date)]
    [DateNotInPast]
    public DateTime DateOfBirth {get;set;}

    public List<Dish> Dishes {get;set;} = new List<Dish>();
}

public class DateNotInPastAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if(value == null)
        {
            return new ValidationResult("Date of Birth is required");
        }

        if((DateTime)value > DateTime.Now)
        {
            return new ValidationResult("Cannot be from the future!");
        }
        
        return ValidationResult.Success;
        
    }
}