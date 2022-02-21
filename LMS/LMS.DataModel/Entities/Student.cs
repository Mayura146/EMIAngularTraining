using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.DataModel.Entities
{
    public class Student
    {
        [Key]
        public int Student_ID { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string ContactPreference { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public byte[] Photo { get; set; }
        public Nullable<int> Course_ID { get; set; }

        public virtual ICollection<BorrowBook> BorrowBooks { get; set; }
        public virtual StudentCourse StudentCourse { get; set; }
    }
}
