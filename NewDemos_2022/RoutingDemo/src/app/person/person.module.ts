import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [PersonComponent, PersonListComponent, PersonDetailsComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedModuleModule
  ]
})
export class PersonModule {
  constructor() {
    console.log('Person Module Loaded!!');
}
 }
