import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {TopbarComponent} from "./components/topbar/topbar.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MaterialModule} from "../../modules/material/material.module";



@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class AdminLayoutModule { }
