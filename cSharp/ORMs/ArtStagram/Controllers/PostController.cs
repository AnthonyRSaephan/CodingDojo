using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ArtStagram.Models;
using Microsoft.EntityFrameworkCore;

namespace ArtStagram.Controllers;

public class PostController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private MyContext context;

    public PostController(ILogger<HomeController> logger, MyContext _context)
    {
        _logger = logger;
        context = _context;
    }

    //! GET
    [SessionCheck]
    [HttpGet("/posts/new")]
    public IActionResult MakeAPost()
    {
        return View("MakeAPost");
    }

    [SessionCheck]
    [HttpGet("/post/{id}")]
    public IActionResult ShowAPost(int id)
    {
        Post? post = context.posts.Include(p => p.LikedByUsers).ThenInclude(l => l.User).Include(p => p.Author).SingleOrDefault(p => p.PostId == id);
        User? user = context.users.Include(u => u.LikedPosts).SingleOrDefault(u => u.UserId == HttpContext.Session.GetInt32("UserId"));
        if(user == null || post == null)
        {
            return RedirectToAction("AllPosts", "Home");
        }
        ShowAPostModel model = new ShowAPostModel();
        model.Post = post;
        bool liked = false;
        foreach(LikedPost likedPost in user.LikedPosts)
        {
            if(likedPost.PostId == post.PostId)
            {
                liked = true;
            }
        }
        model.UserLikedPost = liked;
        return View(model);
    }

    [SessionCheck]
    [HttpGet("/posts/{id}/edit")]
    public IActionResult EditAPost(int id)
    {
        Post? post = context.posts.SingleOrDefault(p => p.PostId == id);
        if(post == null)
        {
            return RedirectToAction("AllPosts", "Home");
        }

        return View("EditAPost", post);
    }

    //! POST
    [HttpPost("/posts/{id}/delete")]
    public IActionResult DeletePost(int id)
    {
        //? delete all likedPosts first

        Post? post = context.posts.Include(p => p.LikedByUsers).SingleOrDefault(p => p.PostId == id);

        if(post == null)
        {
            return RedirectToAction("AllPosts", "Home");
        }

        foreach(LikedPost likedPost in post.LikedByUsers)
        {
            context.liked_posts.Remove(likedPost);
        }

        //? then delete the post

        context.posts.Remove(post);

        context.SaveChanges();
        return RedirectToAction("AllPosts", "Home");
    }

    [HttpPost("/posts/{id}/update")]
    public IActionResult UpdatePost(Post updatedPost, int id)
    {
        if(ModelState.IsValid == false)
        {
            return EditAPost(id);
        }

        Post? originalPost = context.posts.SingleOrDefault(p => p.PostId == id);
        if(originalPost == null)
        {
            return RedirectToAction("AllPosts", "Home");
        }

        originalPost.Title = updatedPost.Title;
        originalPost.Medium = updatedPost.Medium;
        originalPost.ForSale = updatedPost.ForSale;
        originalPost.ImageUrl = updatedPost.ImageUrl;
        originalPost.UpdatedAt = DateTime.Now;
        context.SaveChanges();
        return RedirectToAction("AllPosts", "Home");
    }

    [HttpPost("/posts/unlike/{id}/{_action}/{_controller}")]
    public IActionResult UnlikeAPost(int id, string _action, string _controller)
    {
        Post? post = context.posts.SingleOrDefault(p => p.PostId == id);
        if(post != null)
        {
            User? user = context.users.Include(u => u.LikedPosts).SingleOrDefault(u => u.UserId == HttpContext.Session.GetInt32("UserId"));
            if(user != null)
            {
                LikedPost? unlikePost = context.liked_posts.SingleOrDefault(p => p.UserId == HttpContext.Session.GetInt32("UserId") && p.PostId == id);
                System.Console.WriteLine("*********************** unlike***********************");
                System.Console.WriteLine(unlikePost);
                System.Console.WriteLine("*********************** unlike***********************");
                if(unlikePost != null)
                {
                    post.Likes--;
                    context.liked_posts.Remove(unlikePost);
                    context.SaveChanges();
                }
            }
        }
        return RedirectToAction(_action, _controller, new {id = id});
    }

    [HttpPost("/posts/like/{id}/{_action}/{_controller}")]
    public IActionResult LikeAPost(int id, string _action, string _controller)
    {
        Post? post = context.posts.SingleOrDefault(p => p.PostId == id);
        if(post != null)
        {
            User? user = context.users.SingleOrDefault(u => u.UserId == HttpContext.Session.GetInt32("UserId"));
            if(user != null)
            {
                post.Likes++;
                LikedPost likedPost = new LikedPost();
                likedPost.PostId = post.PostId;
                likedPost.UserId = user.UserId;
                context.Add(likedPost);
                context.SaveChanges();
            }
        }
        return RedirectToAction(_action, _controller, new {id = id});
    }

    [HttpPost("/posts/create")]
    public IActionResult CreatePost(Post post)
    {
        if(ModelState.IsValid == false)
        {
            return MakeAPost();
        }
        post.AuthorId = (int)HttpContext.Session.GetInt32("UserId");
        context.Add(post);
        context.SaveChanges();
        return RedirectToAction("ShowAPost", new {id = post.PostId});
    }
    
}
