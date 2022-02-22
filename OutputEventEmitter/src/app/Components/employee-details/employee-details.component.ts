import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
@Input() employee: Employee=new Employee();
@Output() employeeChange: EventEmitter<Employee>=new EventEmitter<Employee>();
  constructor() { }

  ngOnInit(): void {
  }
public updateEmployeeDetails(): void
{
 this.employeeChange.emit(this.employee);
}
}
