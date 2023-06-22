import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PersonAdministrationModule} from "./modules/person-administration/person-administration.module";

import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {AdminLayoutModule} from "./shared/admin-layout/admin-layout.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PersonAdministrationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatCardModule,
    AdminLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
