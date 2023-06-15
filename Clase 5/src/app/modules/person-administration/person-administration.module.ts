import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailComponent } from './person-detail/person-detail.component';
// import { FormsModule } from "@angular/forms";
import { PersonListComponent } from './person-list/person-list.component';
import {FormsModule} from "@angular/forms";
import {PersonAdministrationRoutingModule} from "./person-administration-routing.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    PersonDetailComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PersonAdministrationRoutingModule,
    MatButtonModule
  ],
  exports: [PersonDetailComponent, PersonListComponent]
})
export class PersonAdministrationModule { }
