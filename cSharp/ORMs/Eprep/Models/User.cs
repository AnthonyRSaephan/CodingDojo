namespace ArtStagram.Models;
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class User
{
    [Key]
    public int UserId { get; set; }

    [Display(Name = "Name:")]
    [MinLength(2, ErrorMessage = "Name must be at least 2 characters")]
    public string Name { get; set; }

    [EmailAddress]
    [UniqueEmail]
    [Display(Name = "Email:")]
    public string Email { get; set; }

    [DataType(DataType.Password)]
    [MinLength(8, ErrorMessage = "**Password must be at least 8 characters**")]
    [Display(Name = "Password:")]
    public string Password { get; set; }

    [Compare("Password")]
    [NotMapped]
    [DataType(DataType.Password)]
    [Display(Name = "Confirm PW:")]
    public string PasswordConfirm { get; set; }

    public List<Post> Posts {get;set;} = new List<Post>();
    public List<LikedPost> LikedPosts {get;set;} = new List<LikedPost>();

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
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