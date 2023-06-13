import { Injectable } from '@angular/core';
import {Person} from "../models/person";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonTestService {

  constructor() { }

  findAll(): Observable<Person[]> {
    return of([
      new Person(30, "Juan", "Perez"),
      new Person(20, "Roberto", "Perez"),
      new Person(30, "Estaban", "Perez")
    ])
  }
}
