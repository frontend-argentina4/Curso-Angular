import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripAdministrationRoutingModule } from './trip-administration-routing.module';
import { TripListComponent } from './trip-list/trip-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    TripListComponent,
    TripDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TripAdministrationRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class TripAdministrationModule { }
