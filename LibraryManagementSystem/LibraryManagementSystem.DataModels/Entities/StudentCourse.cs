using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryManagementSystem.DataModels.Entities
{
    public class StudentCourse
    {
        public int StudentCourse_ID { get; set; }
        public string Title { get; set; }
        public virtual ICollection<Student> Students { get; set; }
    }
}
