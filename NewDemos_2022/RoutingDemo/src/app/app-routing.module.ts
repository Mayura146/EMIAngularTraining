import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EditEmployeeDetailsComponent } from './Components/edit-employee-details/edit-employee-details.component';
import { SwitchComponent } from './Components/switch/switch.component';

import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { CustomDirectiveComponent } from './Components/custom-directive/custom-directive.component';
import { RouteParameterComponent } from './Components/route-parameter/route-parameter.component';
import { CustomPreload } from './custom-preload';
import { AdminGuard } from './RouteGuards/admin.guard';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
   {path: '', component: DataBindingComponent},
  {
    path: 'emp', component: EmployeeComponent , canActivateChild:[AdminGuard],children: [
      {path: 'details/:id', component: EmployeeDetailsComponent},
      {path: 'add', component: AddEmployeeComponent},
      {path: 'edit/:id', component: EditEmployeeDetailsComponent}
    ]
  },
  {path: 'switch', component: SwitchComponent,canDeactivate:[AdminGuard]},
  {path: 'data', component: DataBindingComponent},
  {path: 'custom', component: CustomDirectiveComponent,canActivate:[AdminGuard]},
  {path: 'route/:id', component: RouteParameterComponent},
  {path:'login',component:LoginComponent},
  {path: 'customer', redirectTo: '/customer', pathMatch: 'full'},
   {path: 'person', redirectTo: '/person', pathMatch: 'full'},
 
   {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: 'lazy', loadChildren: () => import('./FeatureModules/lazy-module/lazy-module.module')
  .then(m => m.LazyModuleModule), data: {preload: true}},
  {path: 'demo', loadChildren: () => import('./FeatureModules/demo-lazy/demo-lazy.module').then(m => m.DemoLazyModule)},

 {path: '**', component: PageNotFoundComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreload})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
