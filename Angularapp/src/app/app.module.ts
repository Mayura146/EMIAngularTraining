import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import {DatabindingComponent} from './Components/databinding/databinding.component';
import {FormsModule} from '@angular/forms';
import { SwitchComponent } from './Components/switch/switch.component';
import { AssignInitialPipe } from './CustomPipes/assign-initial.pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { CustomDirectiveComponent } from './Components/custom-directive/custom-directive.component';
import { CustomDirective } from './CustomDirectives/custom.directive';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { MenuComponent } from './Components/menu/menu.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeInfoComponent } from './Components/employee-info/employee-info.component';
import { RouteParameterComponent } from './Components/route-parameter/route-parameter.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
// @HostBinding
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DatabindingComponent,
    SwitchComponent,
    AssignInitialPipe,
    CustomDirectiveComponent,
    CustomDirective,
    PageNotFoundComponent,
    MenuComponent,
    EmployeeDetailsComponent,
    EmployeeInfoComponent,
    RouteParameterComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent
           ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule

  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
