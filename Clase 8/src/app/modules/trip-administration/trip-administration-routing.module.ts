import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripListComponent} from "./trip-list/trip-list.component";
import {TripDetailComponent} from "./trip-detail/trip-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: TripListComponent},
  {path: 'create', component: TripDetailComponent},
  {path: 'detail/:id', component: TripDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripAdministrationRoutingModule { }
