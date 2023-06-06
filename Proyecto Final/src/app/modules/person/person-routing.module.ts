import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonsListComponent} from "./person-list/persons-list.component";
import {PersonInfoComponent} from "./person-info/person-info.component";

const routes: Routes = [

  {path: 'list', component: PersonsListComponent},
  {path: 'detail/:id', component: PersonInfoComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
