namespace SessionWorkshop.Models;
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

public class User
{
    [Required]
    public string Name {get;set;}
}