using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LMS.DataModel.Entities
{
    public class BorrowBook
    {
        [Key]
        public int BorrowBook_ID { get; set; }
        public int Student_ID { get; set; }
        public Nullable<System.DateTime> CurrentDate { get; set; }
        public Nullable<System.DateTime> ReturnDate { get; set; }
        public Nullable<System.DateTime> ReceivedDate { get; set; }
        public string Status { get; set; }

        public virtual Student Student { get; set; }
        [JsonIgnore]
        public virtual ICollection<BorrowBookDetail> BorrowBookDetails { get; set; }
    }
}
