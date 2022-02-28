import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { CustomerDetailsComponent } from './Components/customer-details/customer-details.component';
import { EditCustomerComponent } from './Components/edit-customer/edit-customer.component';
import { RoutParameterComponent } from './Components/rout-parameter/rout-parameter.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { MenuComponent } from './Components/menu/menu.component';
import { SwitchComponent } from './Components/switch/switch.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EditEmployeeDetailsComponent } from './Components/edit-employee-details/edit-employee-details.component';
import { InitialPipe } from './SharedModule/initial.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    EditCustomerComponent,
    RoutParameterComponent,
    LoginComponent,
 
    AddCustomerComponent,
    MenuComponent,
    SwitchComponent,
    AddEmployeeComponent,
    EditEmployeeDetailsComponent
      
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
