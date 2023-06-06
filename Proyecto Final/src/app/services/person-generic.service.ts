import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AbstractService} from "./abstract.service";

@Injectable({
  providedIn: 'root'
})
export class PersonGenericService extends AbstractService {

  constructor(http: HttpClient) {
    super(http, 'persons', 'Persona');
  }
}
