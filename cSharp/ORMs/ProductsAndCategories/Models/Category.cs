namespace ProductsAndCategories.Models;
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;

public class Category
{
    [Key]
    public int CategoryId { get; set; }

    public string Name {get;set;}
    public List<Association> Associations {get;set;} = new List<Association>();

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}