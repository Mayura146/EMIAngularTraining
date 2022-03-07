import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/Models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

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



  constructor(private activate: ActivatedRoute ,
              private router: Router, private _SERVICE: EmployeeService) {


  }
  ngOnInit() {
    this._SERVICE.getEmployees().subscribe(data => {
      this.details = data;
    });
  }

  redirect() {
    this.router.navigate(['route', this.empid]);
   // this.router.navigateByUrl('/route/800');
  }

getQueryParamData() {
  this.ID = this.activate.snapshot.queryParamMap.get('ID');
  this.Name = this.activate.snapshot.queryParamMap.get('Name');
  this.Location = this.activate.snapshot.queryParamMap.get('Location');
  console.log(this.activate.snapshot.queryParamMap.has('ID'));
  console.log(this.activate.snapshot.queryParamMap.keys);

}

trackByEmployee(ID: string): any {
  return this.ID;
}




}
