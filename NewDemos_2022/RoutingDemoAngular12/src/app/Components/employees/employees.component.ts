import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
Employees= [

  {
    id: 1,
    name: 'Mayura',
    location: 'Bangalore'
  },
  {
    id: 2,
    name: 'Sam',
    location: 'Delhi'
  },
  {
    id: 3,
    name: 'John',
    location: 'Pune'
  },
  {
    id: 4,
    name: 'Amit',
    location: 'Pune'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
