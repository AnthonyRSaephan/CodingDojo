using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ProductsAndCategories.Models;
using Microsoft.EntityFrameworkCore;

namespace ProductsAndCategories.Controllers;

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
    public IActionResult Products()
    {
        ViewBag.products = context.products.ToList();
        return View("Products");
    }

    [HttpGet("/categories")]
    public IActionResult Categories()
    {   
        ViewBag.categories = context.categories.ToList();
        return View("Categories");
    }

    [HttpGet("/products/{id}")]
    public IActionResult AddProductCategories(int id)
    {
        System.Console.WriteLine($"Product ID: {id}");
        Product? product = context.products.Include(p => p.Associations).ThenInclude(a => a.Category).SingleOrDefault(p => p.ProductId == id);
        if(product == null)
        {
            return RedirectToAction("Products");
        }
        List<Category> allCategories = context.categories.ToList();

        foreach(Association a in product.Associations)
        {
            allCategories.Remove(a.Category);
        }


        ViewBag.categories = allCategories;
        ViewBag.product = product;
        return View();
    }

    [HttpGet("/categories/{id}")]
    public IActionResult AddCategoryProducts(int id)
    {
        System.Console.WriteLine($"Category ID: {id}");
        Category? category = context.categories.Include(c => c.Associations).ThenInclude(a => a.Product).SingleOrDefault(c => c.CategoryId == id);
        if(category == null)
        {
            return RedirectToAction("Categories");
        }
        List<Product> allProducts = context.products.ToList();
        
        foreach(Association a in category.Associations)
        {
            allProducts.Remove(a.Product);
        }


        ViewBag.products = allProducts;
        ViewBag.category = category;
        return View();
    }

    //! POST
    [HttpPost("/categories/addProduct")]
    public IActionResult AddCategoryProducts(Association association)
    {
        if(ModelState.IsValid == false)
        {
            return RedirectToAction("Categories");
        }

        context.Add(association);
        context.SaveChanges();
        System.Console.WriteLine($"Association: {association.CategoryId}");
        // return RedirectToAction("AddCategoryProducts", new {id = association.CategoryId});
        return Redirect($"/categories/{association.CategoryId}");
    }

    
    [HttpPost("/products/addCategory")]
    public IActionResult AddProductCategory(Association association)
    {
        if(ModelState.IsValid == false)
        {
            return RedirectToAction("Products");
        }

        context.Add(association);
        context.SaveChanges();
        System.Console.WriteLine($"Association: {association.ProductId}");
        return RedirectToAction("AddProductCategories", new {id = association.ProductId});
    }

    [HttpPost("/products/create")]
    public IActionResult CreateAProduct(Product product)
    {
        if(ModelState.IsValid == false)
        {
            return Products();
        }

        context.Add(product);
        context.SaveChanges();
        return RedirectToAction("Products");
    }

    [HttpPost("/categories/create")]
    public IActionResult CreateACategory(Category category)
    {
        if(ModelState.IsValid == false)
        {
            return Categories();
        }

        context.Add(category);
        context.SaveChanges();
        return RedirectToAction("Categories");
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
