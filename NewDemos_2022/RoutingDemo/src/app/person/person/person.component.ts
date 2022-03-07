import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() {
    console.log('Person Component Loaded!!');
   }
person: any[];
  ngOnInit() {
    this.person = [
      {
        id: 1, name: 'Mayura', location: 'Pune', gender: 'Female'
      },

      {
       id: 2, name: 'Sam', location: 'Bangalore', gender: 'Male'
     },
     {
       id: 3, name: 'Smitha', location: 'Bangalore', gender: 'Female'
     },
     {
       id: 1, name: 'Mayura', location: 'Pune', gender: 'Female'
     },

    ];
  }

}
