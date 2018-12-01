

using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using projectplanner.Models;
using Microsoft.EntityFrameworkCore;

namespace projectplanner.Controllers
{
    [Route("api/[Controller]/[Action]")]
    [ApiController]
    public class PlannerApiController : Controller
    {

        private ProjectContext _context;

        public PlannerApiController(ProjectContext ctx)
        {
            _context = ctx;

            //The line below clears and resets the databse.
            /* _context.Database.EnsureDeleted(); */

            // Create the database if it does not exist
            _context.Database.EnsureCreated();

            if (_context.Projects.Count() == 0)
            {
                for (int i = 0; i < 8; i++)
                {
                    _context.Projects.Add(new Project()
                    {
                        Name = "Dummy" + i,
                        Items = new List<Item>{
                        new Item {
                            Name = "Item 1"
                        }
                    }
                    });
                }
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Project> Projects()
        {
            return _context.Projects.Include(x => x.Items);
        }
        [HttpGet("{name}")]
        public Project Project(string name)
        {
            return _context.Projects.Include(x => x.Items).FirstOrDefault(x => x.Name == name);
        }

        [HttpGet("{id}")]
        public Project Delete(long id)
        {
            var project = _context.Projects.Include(x => x.Items).FirstOrDefault(x => x.Id == id);
            if(project != null)
            {
                _context.Remove(project);
                _context.SaveChanges();
                return project;
            }
            return null;
        }

        [HttpGet]
        public Project Add()
        {
            var p = new Project()
            {
                Name = "New one",
                Items = new List<Item>(){new Item(){Name = "New item.."}}
            };
            _context.Add(p);
            _context.SaveChanges();
            return p;
        }
    }
}