import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  constructor() {
    console.log('Switch Component Loaded!!');
   }
  emp = [];
  employees = [
    { id: 1, name: 'Mayura', location: 'Pune' },
    { id: 2, name: 'Smitha', location: 'Bangalore' },
    { id: 3, name: 'James', location: 'Chennai' },
    { id: 4, name: 'Swathi', location: 'Bangalore' },


  ];
  ngOnInit() {

  }



}
