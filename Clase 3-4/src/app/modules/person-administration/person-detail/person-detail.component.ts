import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common'
import {Person} from "../../../models/person";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../../../services/person.service";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit{

  selectedPerson: Person | null = null;

  constructor(private personService: PersonService,
              private route: ActivatedRoute,
              private _location: Location,
              private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id")
      console.log("El id que estoy editando es: " + id);
      if (id) {
        // @ts-ignore
        this.findPerson(Number(id));
      }
    });
  }

  findPerson(id: number) {
    this.personService.findOne(id).subscribe(res => {
      this.selectedPerson = res;
    })
  }

  volverAtras() {
    // this._location.back();
    this.router.navigate(['person','list'])
  }

}
