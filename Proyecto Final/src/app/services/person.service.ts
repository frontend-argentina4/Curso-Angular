import { Injectable } from '@angular/core';
import {catchError, first, map, mergeMap, Observable, of, throwError} from "rxjs";
import {Person} from "../model/person";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  resourceUrl = environment.backUrl + 'persons'

  constructor(private http: HttpClient) { }


  create(p: Person): Observable<any>{
    return this.http.post<any>(this.resourceUrl, p).pipe(
      catchError(err => {
        console.log("Ocurrio un error", err)
        return throwError(() => 'Ocurrio un error al crear una persona')
      })
    )
  }
  update(p: Person): Observable<any>{
    return this.http.put<any>(this.resourceUrl, p).pipe(
      catchError(err => {
        console.log("Ocurrio un error", err)
        return throwError(() => 'Ocurrio un error al actualizar una persona')
      })
    )
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>(this.resourceUrl + "/" + id).pipe(
      catchError(err => {
        console.log("Ocurrio un error", err)
        return throwError(() => 'Ocurrio un error al eliminar una persona')
      })
    )
  }
  findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.resourceUrl).pipe(
      catchError( err => {
        console.log('Ocurrio un error', err)
        return throwError(() => 'Ocurrio un error');
      }),
      map(jsonList => jsonList.map(value => new Person(value.id, value.firstName, value.lastName, value.age))));
  }

  findOne(id: string): Observable<Person> {
    return this.http.get<Person>(this.resourceUrl + '/' + id).pipe(
      catchError( err => {
        console.log('Ocurrio un error', err)
        return throwError(() =>'La Persona no existe');
      }),
      map(json => new Person(json.id, json.firstName, json.lastName, json.age)));
  }

  findAllSimple(): Observable<Person[]> {
    return of(personList);
  }

  findOneSimple(id: string): Observable<Person | null> {
    return of(personList).pipe(mergeMap(p => p),
      first(person => person.id == parseInt(id), null));
  }
}

export const personList: Person[] = [
  new Person(1,'Juan', 'Perez', 15),
  new Person(2,'Jorge', 'Gomez', 20),
  new Person(3,'Maria', 'Sanchez', 19),
  new Person(4,'Estefania', 'Ramirez', 10),
  new Person(5,'Mark', 'Thompson', 35),
]
