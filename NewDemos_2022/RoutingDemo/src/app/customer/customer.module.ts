import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [CustomerComponent, CustomerDetailsComponent, CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModuleModule
  ]
})
export class CustomerModule {
  constructor()
  {
    console.log('Customer Module Loaded');
  }
 }
