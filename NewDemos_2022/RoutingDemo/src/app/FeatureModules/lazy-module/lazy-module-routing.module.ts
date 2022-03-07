import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { LazyComponentProductComponent } from './lazy-component-product/lazy-component-product.component';
import { LazyComponentPersonComponent } from './lazy-component-person/lazy-component-person.component';
import { LazyComponentEmployeeComponent } from './lazy-component-employee/lazy-component-employee.component';


const routes: Routes = [

  {path: '', component: LazyComponentComponent, children: [
    {path: 'product', component: LazyComponentProductComponent, children: [
      {path: 'person', component: LazyComponentPersonComponent},
      {path: 'employee', component: LazyComponentEmployeeComponent},
      {path:'demo',loadChildren:() => import('../demo-lazy/demo-lazy.module').then(m=>m.DemoLazyModule)}

    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleRoutingModule { }
