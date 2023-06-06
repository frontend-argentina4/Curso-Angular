import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmationComponent} from './shared/confirmation/confirmation.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {AdminLayoutModule} from "./shared/admin-layout/admin-layout.module";
import {PersonModule} from "./modules/person/person.module";
import {LoginModule} from "./modules/login/login.module";
import {TokenInterceptor} from "./security/interceptor/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    RouterModule,
    PersonModule,
    LoginModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
