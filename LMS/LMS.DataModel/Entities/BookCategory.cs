using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LMS.DataModel.Entities
{
    public class BookCategory
    {
        public BookCategory()
        {
            this.BookLists = new HashSet<BookList>();
        }
        [Key]
        public int BookCategory_ID { get; set; }
        public string Category_Name { get; set; }
        [JsonIgnore]
        public virtual ICollection<BookList> BookLists { get; set; }
    }
}
