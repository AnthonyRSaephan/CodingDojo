namespace ProductsAndCategories.Models;
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;

public class Product
{
    [Key]
    public int ProductId { get; set; }

    public string Name {get;set;}
    public string Description {get;set;}
    public double Price {get;set;}
    public List<Association> Associations {get;set;} = new List<Association>();

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}