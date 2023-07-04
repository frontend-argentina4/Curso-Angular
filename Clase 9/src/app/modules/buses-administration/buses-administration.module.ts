import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusesAdministrationRoutingModule } from './buses-administration-routing.module';
import {BusesListComponent} from "./buses-list/buses-list.component";


@NgModule({
  declarations: [BusesListComponent],
  imports: [
    CommonModule,
    BusesAdministrationRoutingModule
  ]
})
export class BusesAdministrationModule { }
