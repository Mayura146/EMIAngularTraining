using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LMS.DataModel.Migrations
{
    public partial class mymigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BookCategories",
                columns: table => new
                {
                    BookCategory_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Category_Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookCategories", x => x.BookCategory_ID);
                });

            migrationBuilder.CreateTable(
                name: "StudentCourses",
                columns: table => new
                {
                    StudentCourse_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentCourses", x => x.StudentCourse_ID);
                });

            migrationBuilder.CreateTable(
                name: "BookLists",
                columns: table => new
                {
                    Book_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Author = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Category_ID = table.Column<int>(type: "int", nullable: false),
                    BookCategory_ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookLists", x => x.Book_ID);
                    table.ForeignKey(
                        name: "FK_BookLists_BookCategories_BookCategory_ID",
                        column: x => x.BookCategory_ID,
                        principalTable: "BookCategories",
                        principalColumn: "BookCategory_ID");
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Student_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    First_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Last_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ContactPreference = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Photo = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    Course_ID = table.Column<int>(type: "int", nullable: true),
                    StudentCourse_ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Student_ID);
                    table.ForeignKey(
                        name: "FK_Students_StudentCourses_StudentCourse_ID",
                        column: x => x.StudentCourse_ID,
                        principalTable: "StudentCourses",
                        principalColumn: "StudentCourse_ID");
                });

            migrationBuilder.CreateTable(
                name: "BorrowBooks",
                columns: table => new
                {
                    BorrowBook_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Student_ID = table.Column<int>(type: "int", nullable: false),
                    CurrentDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ReturnDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ReceivedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Student_ID1 = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BorrowBooks", x => x.BorrowBook_ID);
                    table.ForeignKey(
                        name: "FK_BorrowBooks_Students_Student_ID1",
                        column: x => x.Student_ID1,
                        principalTable: "Students",
                        principalColumn: "Student_ID");
                });

            migrationBuilder.CreateTable(
                name: "BorrowBookDetails",
                columns: table => new
                {
                    BorrowBookDetails_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Book_ID = table.Column<int>(type: "int", nullable: false),
                    BorrowBook_ID = table.Column<int>(type: "int", nullable: false),
                    BookListBook_ID = table.Column<int>(type: "int", nullable: true),
                    BorrowBook_ID1 = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BorrowBookDetails", x => x.BorrowBookDetails_ID);
                    table.ForeignKey(
                        name: "FK_BorrowBookDetails_BookLists_BookListBook_ID",
                        column: x => x.BookListBook_ID,
                        principalTable: "BookLists",
                        principalColumn: "Book_ID");
                    table.ForeignKey(
                        name: "FK_BorrowBookDetails_BorrowBooks_BorrowBook_ID1",
                        column: x => x.BorrowBook_ID1,
                        principalTable: "BorrowBooks",
                        principalColumn: "BorrowBook_ID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_BookLists_BookCategory_ID",
                table: "BookLists",
                column: "BookCategory_ID");

            migrationBuilder.CreateIndex(
                name: "IX_BorrowBookDetails_BookListBook_ID",
                table: "BorrowBookDetails",
                column: "BookListBook_ID");

            migrationBuilder.CreateIndex(
                name: "IX_BorrowBookDetails_BorrowBook_ID1",
                table: "BorrowBookDetails",
                column: "BorrowBook_ID1");

            migrationBuilder.CreateIndex(
                name: "IX_BorrowBooks_Student_ID1",
                table: "BorrowBooks",
                column: "Student_ID1");

            migrationBuilder.CreateIndex(
                name: "IX_Students_StudentCourse_ID",
                table: "Students",
                column: "StudentCourse_ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BorrowBookDetails");

            migrationBuilder.DropTable(
                name: "BookLists");

            migrationBuilder.DropTable(
                name: "BorrowBooks");

            migrationBuilder.DropTable(
                name: "BookCategories");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "StudentCourses");
        }
    }
}
