import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BusesListComponent} from "./buses-list/buses-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: "full"},
  {path: 'list', component: BusesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusesAdministrationRoutingModule { }
