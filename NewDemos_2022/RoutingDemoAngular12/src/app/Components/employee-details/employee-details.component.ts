import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
id: number;
  constructor(private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.activate.paramMap.subscribe((p:ParamMap)=>{
      this.id =+ this.activate.snapshot.paramMap.get('id');
    })
  }

}
