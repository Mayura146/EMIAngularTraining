import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoLazyRoutingModule } from './demo-lazy-routing.module';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';


@NgModule({
  declarations: [DemoComponent, Demo1Component, Demo2Component, Demo3Component],
  imports: [
    CommonModule,
    DemoLazyRoutingModule
  ]
})
export class DemoLazyModule {
  constructor()
  {
    console.log('Demo Lazy Module Loaded');
  }
 }
