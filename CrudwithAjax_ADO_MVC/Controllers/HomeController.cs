using CrudwithAjax_ADO_MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrudwithAjax_ADO_MVC.Controllers
{
    public class HomeController : Controller
    {
        EmployeeDB empdb=new EmployeeDB();
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult empList()
        {
            return Json(empdb.ListAll(), JsonRequestBehavior.AllowGet);
        }
    }
}