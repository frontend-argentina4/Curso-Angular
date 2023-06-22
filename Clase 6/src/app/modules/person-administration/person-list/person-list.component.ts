import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../../services/person.service";
import {Person} from "../../../models/person";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit{

  personList: Person[] = [];
  // @ts-ignore
  selectedPerson: Person = null;

  constructor(private personService: PersonService,
              private router: Router) {
  }

  ngOnInit() {
    this.personService.findAll().subscribe(res => {
      this.personList = res;
    }, error => {
      console.log("Ocurrio un error, Imposible!");
    });
  }

  seleccionarPersona(persona:Person) {
    this.router.navigate(['layout','detail', persona.id])
  }
}
