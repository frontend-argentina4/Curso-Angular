import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import {FormsModule} from "@angular/forms";
import { PersonListComponent } from './person-list/person-list.component';

@NgModule({
  declarations: [
    PersonDetailComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PersonDetailComponent, PersonListComponent]
})
export class PersonAdministrationModule { }
