import { Component } from '@angular/core';
import {Person} from "../../models/person";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {

  personList: Person[] = [
    new Person(26, "Juancito", "Linares"),
    new Person(15, "Pedrito", "Linares"),
    new Person(20, "Mengano", "Linares")
  ];
  selectedPerson: Person | null = null;

  seleccionarPersona(persona:Person) {
    this.selectedPerson = persona;
  }
}
