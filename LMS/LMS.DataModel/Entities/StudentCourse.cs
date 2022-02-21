using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LMS.DataModel.Entities
{
    public class StudentCourse
    {
        public StudentCourse()
        {
            this.Students = new HashSet<Student>();
        }
        [Key]
        public int StudentCourse_ID { get; set; }
        public string Title { get; set; }
        [JsonIgnore]
        public virtual ICollection<Student> Students { get; set; }
    }
}
