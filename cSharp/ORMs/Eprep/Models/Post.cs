namespace ArtStagram.Models;
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Post
{
    [Key]
    public int PostId { get; set; }

    public string Title {get;set;}
    public string Medium {get;set;}
    public bool ForSale {get;set;}
    public int Likes {get;set;}

    [DataType(DataType.ImageUrl)]
    public string ImageUrl {get;set;}

    public int AuthorId {get;set;}
    public User? Author {get;set;}

    public List<LikedPost> LikedByUsers {get;set;} = new List<LikedPost>();

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}