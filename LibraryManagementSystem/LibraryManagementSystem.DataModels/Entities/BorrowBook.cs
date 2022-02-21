using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagementSystem.DataModels.Entities
{
    public class BorrowBook
    {
        public int BorrowBook_ID { get; set; }
        public int Student_ID { get; set; }
        public Nullable<System.DateTime> CurrentDate { get; set; }
        public Nullable<System.DateTime> ReturnDate { get; set; }
        public Nullable<System.DateTime> ReceivedDate { get; set; }
        public string Status { get; set; }

        public virtual Student Student { get; set; }
        public virtual ICollection<BorrowBookDetail> BorrowBookDetails { get; set; }
    }
}
