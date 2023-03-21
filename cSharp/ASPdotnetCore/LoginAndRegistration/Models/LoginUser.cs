namespace LoginAndRegistration.Models;
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

public class LoginUser
{
    
    public string? LoginEmail { get; set; }

    [DataType(DataType.Password)]
    public string? LoginPassword { get; set; }
}