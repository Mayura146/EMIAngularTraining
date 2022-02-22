import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
employees: Employee[]=[
  {Id: 1,employeeName: 'Mayura', location: 'Pune',designation: 'Trainer', salary:90856},
  {Id: 1,employeeName: 'Sam', location: 'Delhi',designation: 'Trainer', salary:90856},
  {Id: 1,employeeName: 'John', location: 'Punjab',designation: 'Trainer', salary:90856},
  {Id: 1,employeeName: 'Seema', location: 'Delhi',designation: 'Trainer', salary:90856},
  {Id: 1,employeeName: 'Dev', location: 'Bangalore',designation: 'Trainer', salary:90856},
]

selectedEmployee: Employee=new Employee();

  constructor() { }

  ngOnInit(): void {

  }
 public displayDetails(emp: Employee): void
 {
   this.selectedEmployee=Object.assign({},emp);
 }

 public updateEmployeeDetails(emp: Employee):void
 {
   console.log(emp);
   var e=this.employees.find(e=>e.Id==emp.Id);
   Object.assign(e,emp);
   alert("Details Updated!!");
 }
}
