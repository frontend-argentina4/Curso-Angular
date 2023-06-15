import { Injectable } from '@angular/core';
import {Person} from "../models/person";
import {Observable, of} from "rxjs";




const list = [
  new Person(1, 30, "Juan", "Perez"),
  new Person(1, 20, "Roberto", "Perez"),
  new Person(1, 30, "Estaban", "Perez")
]
@Injectable({
  providedIn: 'root'
})
export class PersonTestService {

  constructor() { }

  findAll(): Observable<Person[]> {
    return of(list)
  }
}
