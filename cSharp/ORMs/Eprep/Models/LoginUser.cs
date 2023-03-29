namespace ArtStagram.Models;
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

public class LoginUser
{
    [Display(Name = "Email:")]
    public string? LoginEmail { get; set; }

    [DataType(DataType.Password)]
    [Display(Name = "Password:")]
    public string? LoginPassword { get; set; }
}