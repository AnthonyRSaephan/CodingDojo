using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ChefsNDishes.Models;

namespace ChefsNDishes.Controllers;

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
    public IActionResult Chefs()
    {
        List<Chef> chefs = context.chefs.ToList();
        return View(chefs);
    }

    [HttpGet("/chefs/new")]
    public IActionResult AddAChef()
    {
        return View();
    }

    [HttpGet("/dishes")]
    public IActionResult Dishes()
    {
        return View();
    }

    [HttpGet("/dishes/new")]
    public IActionResult AddADish()
    {
        ViewBag.Chefs = context.chefs.ToList();
        return View("AddADish");
    }

    //! POST
    [HttpPost("/dishes/create")]
    public IActionResult CreateADish(Dish dish)
    {
        if(ModelState.IsValid == false)
        {
            // return View("AddADish");
            return AddADish();
        }

        return RedirectToAction("Dishes");
    }

    [HttpPost("/chefs/create")]
    public IActionResult CreateAChef(Chef newChef)
    {
        if(ModelState.IsValid == false)
        {
            return View("AddAChef");
        }

        context.Add(newChef);
        context.SaveChanges();
        return RedirectToAction("Chefs");
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
