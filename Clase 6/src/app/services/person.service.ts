import {EventEmitter, Injectable} from '@angular/core';
import {Person} from "../models/person";
import {catchError, first, map, mergeMap, Observable, of, throwError} from "rxjs";

const listado: Person[] = [
  new Person(1,30, "Juanita", "Gomez"),
  new Person(2,20, "Roberto", "Gomez"),
  new Person(3,30, "Estaban", "Gomez")
]

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  findAll(): Observable<Person[]> {
    return of(listado).pipe(
      catchError(err => {
        console.log("Ocurrio un error");
        return throwError(() => "Paso algo");
      }),
      map(persons => {
        persons.forEach(person => person.nombre = "Sr/Sra " + person.nombre);
        return persons;
      }))
  }

  findOne(id: number): Observable<Person> {
    return of(listado).pipe(
      mergeMap(p => p), first(person => person.id === id));
  }
}
