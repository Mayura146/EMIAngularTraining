import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  message = 'Welcome to Data Binding Example';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  public  showData(): void {
    alert ('Event Binding Triggered!!');
    console.log('Event Binding Triggered');
  }
  
}
