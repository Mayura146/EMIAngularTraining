import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import{ProfileComponent} from './profile/profile.component'
import { Role } from './role.model';
const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'profile',canActivate:[AuthGuardGuard],component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',canActivate:[AuthGuardGuard],component:AdminComponent,
  children:[
    {path:'employee',component:EmployeeComponent},
    {path:'edit',component:EditEmployeeComponent}
  ],
  data:{
    roles:[
      Role.Admin,
    ]

  },



  
}

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
