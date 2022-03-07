import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';

const routes: Routes = [
{path: '', component: DemoComponent, children: [
  {path: 'demo1', component: Demo1Component, children: [
    {path: 'demo2', component: Demo2Component },
    {path: 'demo3', component: Demo3Component}
  ]}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoLazyRoutingModule { }
