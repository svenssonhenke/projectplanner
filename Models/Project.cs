using System.Collections.Generic;

namespace projectplanner.Models
{
    public class Project
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public IList<Item> Items {get; set;}
    }
}