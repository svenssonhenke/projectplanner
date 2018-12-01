using Microsoft.EntityFrameworkCore;

namespace projectplanner.Models
{
    public class ProjectContext : DbContext
    {
        public ProjectContext(DbContextOptions<ProjectContext> options)
            : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<Item> Items {get; set;}
    }
}