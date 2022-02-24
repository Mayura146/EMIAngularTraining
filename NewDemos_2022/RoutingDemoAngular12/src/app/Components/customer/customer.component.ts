import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
empId: number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public redirect(): void
  {
    this.router.navigate(['route',this.empId]);
    // this.router.navigateByUrl('/route/800');
  }
}
