import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit {

  @Input()
  control : AbstractControl | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
