namespace DojoSurveyWithValidations.Models;
using System.ComponentModel.DataAnnotations;
#pragma warning disable CS8618
public class User
{
    [Required(ErrorMessage = "Name is required.")]
    [MinLength(2, ErrorMessage = "Name must be at least 2 characters")]
    public string Name {get;set;}

    [Required(ErrorMessage = "Location is required.")]
    public string Location {get;set;}

    [Required(ErrorMessage = "Favorite Language is required.")]
    public string FavoriteLanguage {get;set;}
    
    [MinLength(21, ErrorMessage ="Comment must be more than 20 characters")]
    public string? Comment {get;set;}
}