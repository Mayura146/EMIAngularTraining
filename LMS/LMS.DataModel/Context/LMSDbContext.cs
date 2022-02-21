using LMS.DataModel.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.DataModel.Model
{
    public  class LMSDbContext:DbContext
    {
        public LMSDbContext(DbContextOptions<LMSDbContext> options):base(options)
        {

        }
        public virtual DbSet<BookCategory> BookCategories { get; set; }
        public virtual DbSet<BookList> BookLists { get; set; }
        public virtual DbSet<BorrowBook> BorrowBooks { get; set; }
        public virtual DbSet<BorrowBookDetail> BorrowBookDetails { get; set; }
        public virtual DbSet<Student> Students { get; set; }
        public virtual DbSet<StudentCourse> StudentCourses { get; set; }

    }
}
