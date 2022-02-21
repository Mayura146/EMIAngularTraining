using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagementSystem.DataModels.Entities
{
    public class BookList
    {
        public BookList()
        {
            this.BorrowBookDetails = new HashSet<BorrowBookDetail>();
        }
        public int Book_ID { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int Category_ID { get; set; }

        public virtual BookCategory BookCategory { get; set; }

        public virtual ICollection<BorrowBookDetail> BorrowBookDetails { get; set; }

       
    }
}
