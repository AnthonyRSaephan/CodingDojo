namespace ArtStagram.Models;
#pragma warning disable CS8618

public class AllPostsModel
{
    public List<Post> AllPosts {get;set;}= new List<Post>();
    public List<Post> UserLikedPosts {get;set;} = new List<Post>();
}

