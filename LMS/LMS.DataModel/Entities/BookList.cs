using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.DataModel.Entities
{
    public class BookList
    {
        public BookList()
        {
            this.BorrowBookDetails = new HashSet<BorrowBookDetail>();
        }
        [Key]
        public int Book_ID { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int Category_ID { get; set; }

        public virtual BookCategory BookCategory { get; set; }

        public virtual ICollection<BorrowBookDetail> BorrowBookDetails { get; set; }


    }
}
