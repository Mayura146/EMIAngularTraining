import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-rout-parameter',
  templateUrl: './rout-parameter.component.html',
  styleUrls: ['./rout-parameter.component.scss']
})
export class RoutParameterComponent implements OnInit {
  ID: number;
  Name: string;
  Location: string;
  constructor(private activate: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.activate.paramMap.subscribe((p: ParamMap) => {
      this.ID = +p.get('id');
    });
    //this.ID = +this.activate.snapshot.paramMap.get('id');

  }
  public QueryParam() {
    this.router.navigate(['emp'], {queryParams: {ID: 23, Name: 'Mayura', Location: 'Bangalore'}});
  }
  redirect() {

    this.router.navigate(['emp']);
  
  
  }
}
