import { Component } from '@angular/core';
import {Person} from "../../models/person";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent {

  selectedPerson: Person | null = null;

}
