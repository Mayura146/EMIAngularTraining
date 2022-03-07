import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
ID: any;
  details: any;
constructor(private activate: ActivatedRoute, private _SERVICE: EmployeeService) { }




  ngOnInit() {
  this.activate.paramMap.subscribe((p: ParamMap) => {
  this.ID = + this.activate.snapshot.paramMap.get('id');
  //   this.details = this._SERVICE.getEmployeebyID(this.ID);
  this._SERVICE.getEmployeebyID(this.ID).subscribe(data => {
  this.details = data;
              });
          });

      }





   }



