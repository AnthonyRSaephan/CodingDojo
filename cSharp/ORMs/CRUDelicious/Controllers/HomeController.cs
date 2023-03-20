using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;

namespace CRUDelicious.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    // Add a private variable of type MyContext (or whatever you named your context file)
    private MyContext _context;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        // When our HomeController is instantiated, it will fill in _context with context
        // Remember that when context is initialized, it brings in everything we need from DbContext
        // which comes from Entity Framework Core
        _context = context;
    }

    //! GET
    [HttpGet("/dishes")]
    public IActionResult Dishes()
    {
        List<Dish> dishes = _context.dishes.ToList();
        return View(dishes);
    }

    [HttpGet("/dishes/new")]
    public IActionResult CreateANewDish()
    {
        return View();
    }

    [HttpGet("/dishes/{id}")]
    public IActionResult ShowADish(int id)
    {
        Dish? dish = _context.dishes.SingleOrDefault(d => d.DishId == id);
        return View(dish);
    }

    [HttpGet("/dishes/{id}/edit")]
    public IActionResult EditADish(int id)
    {
        Dish? dish = _context.dishes.SingleOrDefault(d => d.DishId == id);
        if (dish != null)
        {
            return View(dish);
        }
        return RedirectToAction("Dishes");
    }

    //! POST

    [HttpPost("/dishes/create")]
    public IActionResult CreateDish(Dish dish)
    {
        if (ModelState.IsValid == false)
        {
            return View("CreateANewDish");
        }

        _context.Add(dish);
        _context.SaveChanges();

        return RedirectToAction("Dishes");
    }

    [HttpPost("/dishes/{id}/destroy")]
    public RedirectToActionResult DestroyADish(int id)
    {
        Dish? dish = _context.dishes.SingleOrDefault(d => d.DishId == id);
        if (dish != null)
        {
            _context.dishes.Remove(dish);
            _context.SaveChanges();
        }
        return RedirectToAction("Dishes");
    }

    [HttpPost("/dishes/{id}/update")]
    public IActionResult UpdateDish(int id, Dish newDish)
    {
        if (ModelState.IsValid == false)
        {
            return View("EditADish", newDish);
        }

        Dish? oldDish = _context.dishes.SingleOrDefault(d => d.DishId == id);
        if (oldDish != null)
        {
            oldDish.Chef = newDish.Chef;
            oldDish.Name = newDish.Name;
            oldDish.Tastiness = newDish.Tastiness;
            oldDish.Calories = newDish.Calories;
            oldDish.Description = newDish.Description;
            oldDish.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
        }
        return RedirectToAction("Dishes");
    }


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
