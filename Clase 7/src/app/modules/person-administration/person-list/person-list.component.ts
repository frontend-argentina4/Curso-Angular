import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../../services/person.service";
import {Person} from "../../../models/person";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

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
              private matSnackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {
    this.loadPerson();
  }

  loadPerson() {
    this.personService.findAll().subscribe(res => {
      if (res.body)
        this.personList = res.body.map(json => new Person(json.id, json.age, json.name, json.lastName));
    }, error => {
      console.log("Ocurrio un error, Imposible!");
    });
  }

  seleccionarPersona(persona:Person) {
    this.router.navigate(['person','detail', persona.id])
  }

  crearPersona() {
    this.router.navigate(['person','create'])
  }

  borrarPersona(persona: Person) {
    this.personService.borrar(persona.id).subscribe(res => {
      this.matSnackBar.open("Se borro correctamente la persona correctamente", "Cerrar");
      this.loadPerson();
    }, error => {
      console.log(error);
      this.matSnackBar.open(error, "Cerrar");
    });
  }
}
