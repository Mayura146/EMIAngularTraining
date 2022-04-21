import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { SubjectObserableComponent } from './subject-obserable/subject-obserable.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReplaySubject } from 'rxjs';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';


const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'subject', component: SubjectObserableComponent },
  { path: 'about', component: AboutusComponent },
  {path:'replay',component:ReplaySubjectComponent},
  {path:'',redirectTo:'hello',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
