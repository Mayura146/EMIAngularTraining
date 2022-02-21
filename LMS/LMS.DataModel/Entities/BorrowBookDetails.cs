using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LMS.DataModel.Entities
{
    public class BorrowBookDetail
    {
        [Key]
        public int BorrowBookDetails_ID { get; set; }
        public int Book_ID { get; set; }
        public int BorrowBook_ID { get; set; }
        [JsonIgnore]
        public virtual BookList BookList { get; set; }

        [JsonIgnore]
        public virtual BorrowBook BorrowBook { get; set; }

    }
}
