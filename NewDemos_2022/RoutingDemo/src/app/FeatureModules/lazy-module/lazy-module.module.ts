import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleRoutingModule } from './lazy-module-routing.module';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { LazyComponentProductComponent } from './lazy-component-product/lazy-component-product.component';
import { LazyComponentPersonComponent } from './lazy-component-person/lazy-component-person.component';
import { LazyComponentEmployeeComponent } from './lazy-component-employee/lazy-component-employee.component';


@NgModule({
  declarations: [LazyComponentComponent, LazyComponentProductComponent, LazyComponentPersonComponent, LazyComponentEmployeeComponent],
  imports: [
    CommonModule,
    LazyModuleRoutingModule
  ]
})
export class LazyModuleModule {
  constructor() {
    console.log('Lazy Module Loaded!!');
  }
}

