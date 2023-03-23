namespace LoginAndRegistration.Models;
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class User
{
    [Key]
    public int UserId { get; set; }

    [Required]
    public string FirstName { get; set; }

    [Required]
    public string LastName { get; set;}

    [Required]
    [EmailAddress]
    [UniqueEmail]
    public string Email { get; set; }

    [Required]
    [DataType(DataType.Password)]
    [MinLength(8)]
    public string Password { get; set; }

    [Compare("Password")]
    [NotMapped]
    [DataType(DataType.Password)]
    public string PasswordConfirm { get; set; }
}

public class UniqueEmailAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if (value == null)
        {
            return new ValidationResult("Email is required");
        }

        MyContext context = (MyContext)validationContext.GetService(typeof(MyContext));
        if (context.users.Any(u => u.Email == value.ToString()))
        {
            return new ValidationResult("Email must be unique!");
        }

        return ValidationResult.Success;
    }
}