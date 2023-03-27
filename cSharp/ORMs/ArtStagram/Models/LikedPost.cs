namespace ArtStagram.Models;
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;

public class LikedPost
{
    [Key]
    public int LikedPostId { get; set; }

    public int UserId {get;set;}
    public int PostId {get;set;}

    public Post? Post {get;set;}
    public User? User {get;set;}
}