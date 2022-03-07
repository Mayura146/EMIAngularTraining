import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-component-employee',
  templateUrl: './lazy-component-employee.component.html',
  styleUrls: ['./lazy-component-employee.component.css']
})
export class LazyComponentEmployeeComponent implements OnInit {

 
  constructor() { 
    console.log('LAzy Component Employee gets Loaded');
  }


  ngOnInit() {
  }

}
