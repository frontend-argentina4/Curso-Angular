import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import {PersonsListComponent} from "./person-list/persons-list.component";
import {PersonInfoComponent} from "./person-info/person-info.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormErrorModule} from "../../shared/form-error/form-error.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [PersonsListComponent, PersonInfoComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormErrorModule,
    MaterialModule
  ]
})
export class PersonModule { }
