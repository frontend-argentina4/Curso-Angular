import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatNativeDateModule} from "@angular/material/core";
import {MatChipsModule} from "@angular/material/chips";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatRadioModule} from "@angular/material/radio";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatBadgeModule} from "@angular/material/badge";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ReactiveFormsModule} from "@angular/forms";


const MaterialModules = [
  MatIconModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatSelectModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule,
  MatNativeDateModule,
  MatChipsModule,
  MatDividerModule,
  MatListModule,
  MatRadioModule,
  MatTooltipModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatSortModule, MatCardModule, MatTabsModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatBadgeModule,
  MatToolbarModule,
  MatMenuModule,
  MatSnackBarModule,
  ReactiveFormsModule
];
@NgModule({
  declarations: [],
  exports: [
    ...MaterialModules
  ]
})
export class MaterialModule { }
