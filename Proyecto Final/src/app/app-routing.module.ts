import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./shared/admin-layout/layout/layout.component";
import {LoginComponent} from "./modules/login/login.component";
import {AuthGuard} from "./security/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'person',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'person',
        loadChildren: () => import('./modules/person/person.module').then(mod => mod.PersonModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
