import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PersonListComponent} from "./modules/person-administration/person-list/person-list.component";
import {PersonDetailComponent} from "./modules/person-administration/person-detail/person-detail.component";
import {AdminLayoutComponent} from "./shared/admin-layout/admin-layout.component";

const routes: Routes = [
  {path: '', redirectTo: 'layout', pathMatch: 'full'},
  // {path: 'List', component: PersonListComponent},
  // {path: 'detail', component: PersonDetailComponent}
  { path: 'person', loadChildren: () =>
      import('./modules/person-administration/person-administration.module').then(mod => mod.PersonAdministrationModule)},
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'layout',
        loadChildren: () =>
          import('./modules/person-administration/person-administration.module').then(mod => mod.PersonAdministrationModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
