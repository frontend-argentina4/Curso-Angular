import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error/form-error.component';



@NgModule({
    declarations: [
        FormErrorComponent
    ],
    exports: [
        FormErrorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FormErrorModule { }
