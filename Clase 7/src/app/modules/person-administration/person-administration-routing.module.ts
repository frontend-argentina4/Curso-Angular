import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonDetailComponent} from "./person-detail/person-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: PersonListComponent},
  {path: 'create', component: PersonDetailComponent},
  {path: 'detail/:id', component: PersonDetailComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonAdministrationRoutingModule { }
