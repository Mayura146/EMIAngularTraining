import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import { InitialPipe } from 'src/app/SharedModule/initial.pipe';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  months = ['jan', 'feb', 'March', 'April', 'May', 'June', 'July'];
  todaydate = new Date();
  jsonvalue = {name: 'Alex', age: 34, address: { a1: 'Paris', a2: 'France'}};
  public showData = false;
  public btnname: any = 'show';
   searchText: any;
   ID: string;
   Name: string;
   Location: string;
   empid: number;
  details: any[];
// Employees= [

//   {
//     id: 1,
//     name: 'Mayura',
//     location: 'Bangalore'
//   },
//   {
//     id: 2,
//     name: 'Sam',
//     location: 'Delhi'
//   },
//   {
//     id: 3,
//     name: 'John',
//     location: 'Pune'
//   },
//   {
//     id: 4,
//     name: 'Amit',
//     location: 'Pune'
//   }
// ]


  constructor(private activate: ActivatedRoute, private router:Router, private _service:EmployeeService) { }

  ngOnInit(): void {
    this._service.getEmployees().subscribe(data=>{
      this.details=data;
    })
  }
  public redirect(): void
  {
    this.router.navigate(['route',this.empid]);
  }

  public getQueryParamData(): void
  {
    this.ID = this.activate.snapshot.queryParamMap.get('ID');
  this.Name = this.activate.snapshot.queryParamMap.get('Name');
  this.Location = this.activate.snapshot.queryParamMap.get('Location');
  console.log(this.activate.snapshot.queryParamMap.has('ID'));
  console.log(this.activate.snapshot.queryParamMap.keys);
  }

}
