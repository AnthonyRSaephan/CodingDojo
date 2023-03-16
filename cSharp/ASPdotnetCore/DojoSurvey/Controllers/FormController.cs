// This brings all the MVC features we need to this file
using Microsoft.AspNetCore.Mvc;
// Be sure to use your own project's namespace here! 
namespace Form.Controllers;
public class FormController : Controller   // Remember inheritance?    
{
    [HttpGet("/")] // We will go over this in more detail on the next page    
    public ViewResult Index()
    {
        return View("Form");
    }

    [HttpPost("/results")]
    public IActionResult handleForm(string name, string location, string favoriteLanguage, string comment)
    {
        ViewBag.name = name;
        ViewBag.location = location;
        ViewBag.favoriteLanguage = favoriteLanguage;
        ViewBag.comment = comment;

        return View("Display");
    }
}

