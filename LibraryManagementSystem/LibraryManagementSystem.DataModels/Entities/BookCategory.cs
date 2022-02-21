using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagementSystem.DataModels.Entities
{
   public class BookCategory
    {
        public BookCategory()
        {
            this.BookLists = new HashSet<BookList>();
        }

        public int BookCategory_ID { get; set; }
        public string Category_Name { get; set; }
        public virtual ICollection<BookList> BookLists { get; set; }
    }
}
