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
        Post? post = context.posts.Include(p => p.Author).SingleOrDefault(p => p.PostId == id);
        return View(post);
    }

    //! POST
    [HttpPost("/posts/like/{id}")]
    public IActionResult LikeAPost(int id, string action, string controller)
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
        return RedirectToAction(action, controller);
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
        return RedirectToAction("ShowAPost");
    }
    
}
