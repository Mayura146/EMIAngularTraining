import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }
 customers: any[];
  ngOnInit() {
 this.customers = [
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
