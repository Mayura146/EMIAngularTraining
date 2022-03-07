import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EditEmployeeDetailsComponent } from './Components/edit-employee-details/edit-employee-details.component';
import { SwitchComponent } from './Components/switch/switch.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { AssignInitalPipe } from './CustomPipes/assign-inital.pipe';
import { CustomDirectiveComponent } from './Components/custom-directive/custom-directive.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MenuComponent } from './Components/menu/menu.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { CustomDirective } from './CustomDirectives/custom.directive';
import { RouteParameterComponent } from './Components/route-parameter/route-parameter.component';
import { CustomerModule } from './customer/customer.module';
import { PersonModule } from './person/person.module';
import { CustomPreload } from './custom-preload';
import { LoginComponent } from './Components/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    EditEmployeeDetailsComponent,
    SwitchComponent,
    DataBindingComponent,
     AssignInitalPipe,
    CustomDirectiveComponent,
    MenuComponent,
    PageNotFoundComponent,
    CustomDirective,
    RouteParameterComponent,
    LoginComponent
 



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    CustomerModule,
    PersonModule
  ],
  providers: [CustomPreload],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App Module Loaded');
  }
 }
