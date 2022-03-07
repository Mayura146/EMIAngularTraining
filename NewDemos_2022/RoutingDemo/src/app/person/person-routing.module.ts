import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PageNotFoundComponent } from '../Components/page-not-found/page-not-found.component';



const routes: Routes = [
  {path: 'person', component: PersonComponent, children: [
 {path: 'details', component: PersonDetailsComponent},
 {path: 'list', component: PersonListComponent}
  ]},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
