import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CustomerDetailsComponent } from './Components/customer-details/customer-details.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { EditCustomerComponent } from './Components/edit-customer/edit-customer.component';
import { EditEmployeeDetailsComponent } from './Components/edit-employee-details/edit-employee-details.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { RoutParameterComponent } from './Components/rout-parameter/rout-parameter.component';
import { SwitchComponent } from './Components/switch/switch.component';
import { AdminGuard } from './RouteGuards/admin.guard';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch: 'full'},// signifies that complete URL path requires to be matched.
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'employees', component: EmployeesComponent,canActivateChild:[AdminGuard],children:[
  {path: 'employee-detail/:id', component:EmployeeDetailsComponent},
  {path: 'add', component: AddEmployeeComponent},
  {path: 'edit/:id', component: EditEmployeeDetailsComponent}
  ]},
  {path: 'employee-detail/:id', component:EmployeeDetailsComponent},
  {path: 'contact',component:ContactComponent,canActivate:[AdminGuard]},
  {path: 'customer',component: CustomerComponent, children:[
  {path: 'add',component: AddCustomerComponent},
  { path: 'edit/:id' ,component: EditCustomerComponent},
  {path: 'details/:id',component: CustomerDetailsComponent},
  ]},
  {path: 'login', component: LoginComponent},
  {path:'switch',component:SwitchComponent,canActivate:[AdminGuard]},
  {path: 'customer',redirectTo: '/customer', pathMatch:'full'},
  {path:'route/:id', component: RoutParameterComponent},
  {path: 'product',loadChildren: () => import('./FeatureModule/Product/products/products.module')
.then(m=>m.ProductsModule)},
  {path: '**', component: PageNotFoundComponent}
];

// 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
