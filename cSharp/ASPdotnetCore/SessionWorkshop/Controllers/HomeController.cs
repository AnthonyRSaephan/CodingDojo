using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SessionWorkshop.Models;

namespace SessionWorkshop.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    //* GET *************************************************

    [HttpGet("/")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("/dashboard")]
    public IActionResult Dashboard()
    {
        if(HttpContext.Session.GetString("Name") == null)
        {
            return RedirectToAction("Index");
        }
        return View();
    }

    //* POST *************************************************

    [HttpPost("/login")]
    public IActionResult Login(User user)
    {
        if(!ModelState.IsValid)
        {
            return View("Index");
        }
        HttpContext.Session.SetString("Name", user.Name);
        HttpContext.Session.SetInt32("Number", 22);
        return RedirectToAction("Dashboard");
    }

    [HttpPost("/logout")]
    public RedirectToActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    [HttpPost("/operation/{operation}/{number}")]
    [HttpPost("/random")]
    public RedirectToActionResult Operation(string operation = "nothing", int number = 0)
    {
        if(operation == "nothing")
        {
            int? currentNumber = HttpContext.Session.GetInt32("Number");
            Random random = new Random();
            int newNumber = (int)currentNumber + random.Next(11);
            HttpContext.Session.SetInt32("Number", newNumber);
        }
        else if(operation == "multiply")
        {
            int? currentNumber = HttpContext.Session.GetInt32("Number");
            int newNumber = (int)currentNumber*number;
            HttpContext.Session.SetInt32("Number", newNumber);
        }
        else if(operation == "add")
        {
            int? currentNumber = HttpContext.Session.GetInt32("Number");
            int newNumber = (int)currentNumber + number;
            HttpContext.Session.SetInt32("Number", newNumber);
        }
        return RedirectToAction("Dashboard");
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
