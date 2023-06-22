import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common'
import {Person} from "../../../models/person";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../../../services/person.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit{

  selectedPerson: Person | null = null;
  nameControl = new FormControl('', [Validators.required]);
  ageControl = new FormControl('', [Validators.required]);
  lastNameControl = new FormControl('', [Validators.required]);

  personForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    age: [0, [Validators.required, Validators.min(0), Validators.max(101)]]
  })

  constructor(private personService: PersonService,
              private fb: FormBuilder,
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

    // this.nameControl.valueChanges.subscribe(res => console.log(res));
  }

  findPerson(id: number) {
    this.personService.findOne(id).subscribe(res => {
      this.selectedPerson = res;

      this.personForm.patchValue({
        name: this.selectedPerson.nombre,
        lastName: this.selectedPerson.apellido,
        age: this.selectedPerson.edad
      })
    })
  }

  guardarCambios() {
    if (this.selectedPerson && this.selectedPerson.id) {
      // LLamar al metodo actualizar
      console.log("Actualizando una persona");
    }
    else {
      // Llamar al metodo crear
      console.log("Creando una persona");
    }

    console.log("Nombre: " + this.personForm.get('name').value);
    console.log("Apellido: " + this.personForm.get('lastName').value);
    console.log("Edad: " + this.personForm.get('age').value);
    // console.log(this.personForm.value)
  }

  volverAtras() {
    // this._location.back();
    this.router.navigate(['layout','list'])
  }

}
