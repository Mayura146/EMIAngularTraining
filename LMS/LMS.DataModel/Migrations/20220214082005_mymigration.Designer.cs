﻿// <auto-generated />
using System;
using LMS.DataModel.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace LMS.DataModel.Migrations
{
    [DbContext(typeof(LMSDbContext))]
    [Migration("20220214082005_mymigration")]
    partial class mymigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("LMS.DataModel.Entities.BookCategory", b =>
                {
                    b.Property<int>("BookCategory_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BookCategory_ID"), 1L, 1);

                    b.Property<string>("Category_Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BookCategory_ID");

                    b.ToTable("BookCategories");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.BookList", b =>
                {
                    b.Property<int>("Book_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Book_ID"), 1L, 1);

                    b.Property<string>("Author")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("BookCategory_ID")
                        .HasColumnType("int");

                    b.Property<int>("Category_ID")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Book_ID");

                    b.HasIndex("BookCategory_ID");

                    b.ToTable("BookLists");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.BorrowBook", b =>
                {
                    b.Property<int>("BorrowBook_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BorrowBook_ID"), 1L, 1);

                    b.Property<DateTime?>("CurrentDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("ReceivedDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("ReturnDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Student_ID")
                        .HasColumnType("int");

                    b.Property<int?>("Student_ID1")
                        .HasColumnType("int");

                    b.HasKey("BorrowBook_ID");

                    b.HasIndex("Student_ID1");

                    b.ToTable("BorrowBooks");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.BorrowBookDetail", b =>
                {
                    b.Property<int>("BorrowBookDetails_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BorrowBookDetails_ID"), 1L, 1);

                    b.Property<int?>("BookListBook_ID")
                        .HasColumnType("int");

                    b.Property<int>("Book_ID")
                        .HasColumnType("int");

                    b.Property<int>("BorrowBook_ID")
                        .HasColumnType("int");

                    b.Property<int?>("BorrowBook_ID1")
                        .HasColumnType("int");

                    b.HasKey("BorrowBookDetails_ID");

                    b.HasIndex("BookListBook_ID");

                    b.HasIndex("BorrowBook_ID1");

                    b.ToTable("BorrowBookDetails");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.Student", b =>
                {
                    b.Property<int>("Student_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Student_ID"), 1L, 1);

                    b.Property<string>("ContactPreference")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Course_ID")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("First_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Last_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("Photo")
                        .HasColumnType("varbinary(max)");

                    b.Property<int?>("StudentCourse_ID")
                        .HasColumnType("int");

                    b.HasKey("Student_ID");

                    b.HasIndex("StudentCourse_ID");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.StudentCourse", b =>
                {
                    b.Property<int>("StudentCourse_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("StudentCourse_ID"), 1L, 1);

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("StudentCourse_ID");

                    b.ToTable("StudentCourses");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.BookList", b =>
                {
                    b.HasOne("LMS.DataModel.Entities.BookCategory", "BookCategory")
                        .WithMany("BookLists")
                        .HasForeignKey("BookCategory_ID");

                    b.Navigation("BookCategory");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.BorrowBook", b =>
                {
                    b.HasOne("LMS.DataModel.Entities.Student", "Student")
                        .WithMany("BorrowBooks")
                        .HasForeignKey("Student_ID1");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.BorrowBookDetail", b =>
                {
                    b.HasOne("LMS.DataModel.Entities.BookList", "BookList")
                        .WithMany("BorrowBookDetails")
                        .HasForeignKey("BookListBook_ID");

                    b.HasOne("LMS.DataModel.Entities.BorrowBook", "BorrowBook")
                        .WithMany("BorrowBookDetails")
                        .HasForeignKey("BorrowBook_ID1");

                    b.Navigation("BookList");

                    b.Navigation("BorrowBook");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.Student", b =>
                {
                    b.HasOne("LMS.DataModel.Entities.StudentCourse", "StudentCourse")
                        .WithMany("Students")
                        .HasForeignKey("StudentCourse_ID");

                    b.Navigation("StudentCourse");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.BookCategory", b =>
                {
                    b.Navigation("BookLists");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.BookList", b =>
                {
                    b.Navigation("BorrowBookDetails");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.BorrowBook", b =>
                {
                    b.Navigation("BorrowBookDetails");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.Student", b =>
                {
                    b.Navigation("BorrowBooks");
                });

            modelBuilder.Entity("LMS.DataModel.Entities.StudentCourse", b =>
                {
                    b.Navigation("Students");
                });
#pragma warning restore 612, 618
        }
    }
}
