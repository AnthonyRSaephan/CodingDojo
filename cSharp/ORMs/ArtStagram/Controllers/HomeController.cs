using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ArtStagram.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;

namespace ArtStagram.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private MyContext context;

    public HomeController(ILogger<HomeController> logger, MyContext _context)
    {
        _logger = logger;
        context = _context;
    }

    //! GET
    [HttpGet("/")]
    public IActionResult Index()
    {
        return View("Index");
    }

    [SessionCheck]
    [HttpGet("/posts")]
    public IActionResult AllPosts()
    {
        List<Post> allPosts = context.posts.Include(p => p.Author).ToList();
        User? user= context.users.Include(u => u.LikedPosts)
        .ThenInclude(l => l.Post)
        .SingleOrDefault(u => u.UserId == HttpContext.Session.GetInt32("UserId"));
        
        return View(allPosts);
    }

    //! POST
    [HttpPost("/logout")]
    public RedirectToActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    [HttpPost("/login")]
    public IActionResult LoginAUser(LoginUser loginUser)
    {
        if (ModelState.IsValid == false)
        {
            return Index();
        }
        User? user = context.users.SingleOrDefault(u => u.Email == loginUser.LoginEmail);

        if (user == null)
        {
            ModelState.AddModelError("LoginEmail", "Invalid email or password");
            return Index();
        }

        if(loginUser.LoginPassword == null)
        {
            ModelState.AddModelError("LoginEmail", "Invalid email or password");
            return Index();
        }

        PasswordHasher<LoginUser> Hasher = new PasswordHasher<LoginUser>();
        var result = Hasher.VerifyHashedPassword(loginUser, user.Password, loginUser.LoginPassword);

        if(result == 0)
        {
            ModelState.AddModelError("LoginEmail", "Invalid email or password");
            return Index();
        }

        HttpContext.Session.SetInt32("UserId", user.UserId);
        return RedirectToAction("AllPosts");
    }

    [HttpPost("/register")]
    public IActionResult RegisterAUser(User user)
    {
        if (ModelState.IsValid == false)
        {
            return Index();
        }

        PasswordHasher<User> Hasher = new PasswordHasher<User>();
        user.Password = Hasher.HashPassword(user, user.Password);
        context.Add(user);
        context.SaveChanges();
        HttpContext.Session.SetInt32("UserId", user.UserId);
        return RedirectToAction("AllPosts");
    }

    //! ETC
    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

// Name this anything you want with the word "Attribute" at the end
public class SessionCheckAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        // Find the session, but remember it may be null so we need int?
        int? userId = context.HttpContext.Session.GetInt32("UserId");
        // Check to see if we got back null
        if (userId == null)
        {
            // Redirect to the Index page if there was nothing in session
            // "Home" here is referring to "HomeController", you can use any controller that is appropriate here
            context.Result = new RedirectToActionResult("Index", "Home", null);
        }
    }
}