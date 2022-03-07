import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-component-product',
  templateUrl: './lazy-component-product.component.html',
  styleUrls: ['./lazy-component-product.component.css']
})
export class LazyComponentProductComponent implements OnInit {

  constructor() { 
    console.log('LAzy ComponentProduct gets Loaded');
  }

  ngOnInit() {
  }

}
