using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LoginAndRegistration.Models;
// Add this using statement to be able to use PasswordHasher
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;


namespace LoginAndRegistration.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private MyContext _context;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    //! GET
    [HttpGet("/")]
    public IActionResult Index()
    {
        return View();
    }

    [SessionCheck]
    [HttpGet("/success")]
    public IActionResult Dashboard()
    {
        return View();
    }

    //! POST
    [HttpPost("/login")]
    public IActionResult Login(LoginUser loginUser)
    {
        if (ModelState.IsValid == false)
        {
            return View("Index");
        }
        User? user = _context.users.SingleOrDefault(u => u.Email == loginUser.LoginEmail);

        if (user == null)
        {
            ModelState.AddModelError("LoginEmail", "Invalid email or password");
            return View("Index");
        }

        if(loginUser.LoginPassword == null)
        {
            ModelState.AddModelError("LoginEmail", "Invalid email or password");
            return View("Index");
        }

        PasswordHasher<LoginUser> Hasher = new PasswordHasher<LoginUser>();
        var result = Hasher.VerifyHashedPassword(loginUser, user.Password, loginUser.LoginPassword);

        if(result == 0)
        {
            ModelState.AddModelError("LoginEmail", "Invalid email or password");
            return View("Index");
        }

        HttpContext.Session.SetInt32("UserId", user.UserId);
        return RedirectToAction("Dashboard");
    }

    [HttpPost("/users/create")]
    public IActionResult CreateUser(User user)
    {
        if (ModelState.IsValid == false)
        {
            return View("Index");
        }

        PasswordHasher<User> Hasher = new PasswordHasher<User>();
        user.Password = Hasher.HashPassword(user, user.Password);
        _context.Add(user);
        _context.SaveChanges();
        HttpContext.Session.SetInt32("UserId", user.UserId);
        return RedirectToAction("Dashboard");
    }

    [HttpPost("/logout")]
    public RedirectToActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Dashboard");
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

