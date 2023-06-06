import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person} from "../../../model/person";
import {Router} from "@angular/router";
import {PersonGenericService} from "../../../services/person-generic.service";
import {Subscription} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationComponent} from "../../../shared/confirmation/confirmation.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-person-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit, OnDestroy {
  persons: Person[] = [];
  personSelected: Person | undefined = undefined;
  sub: Subscription[] = [];
  loading = true;

  displayedColumns: string[] = ['name', 'lastName', 'age', 'options'];
  dataSource = new MatTableDataSource<Person>();

  constructor(private personService: PersonGenericService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  applyFilter(event: Event) {
    //Filtro en memoria
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    /*Si tenemos paginado - resetear
    * Si usamos filtro en servidor, armar el request y llamar al findAll*/
  }

  ngOnInit(): void {
    this.findAll();
    /*Se puede modificar el predicado (criterio de busqueda)*/
    /*this.dataSource.filterPredicate = (person: Person, filter: string) => {
      let value = filter.trim().toLowerCase();
      return person.firstName.toLowerCase().includes(value) ||
        person.lastName.toLowerCase().includes(value)
    };*/
  }

  ngOnDestroy() {
    this.sub.forEach(s => s.unsubscribe())
  }

  findAll() {
    this.loading = true;
    this.personService.findAll().subscribe(list => {
      this.loading = false;
      this.persons = list.map(p => new Person(p.id, p.firstName, p.lastName, p.age));
      this.dataSource.data = this.persons;
    })
  }

  goToDetail(p?: Person) {
    if (p)
      this.router.navigate(['person','detail', p.id])
    else
      this.router.navigate(['person','detail', ''])
  }

  delete(p: Person) {
    const dialogRef = this.dialog.open(ConfirmationComponent)
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.sub.push(this.personService.delete(p.id).subscribe({
          next: () => {
            this.snackBar.open("Persona eliminada con exito")
            this.findAll()
          },
          error: (err) => this.snackBar.open(err),
        }));
      }
    })
  }
}
