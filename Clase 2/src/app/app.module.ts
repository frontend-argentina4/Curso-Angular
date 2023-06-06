import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PersonAdministrationModule} from "./person-administration/person-administration.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonAdministrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
