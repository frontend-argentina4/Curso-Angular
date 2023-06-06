import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person} from "../../../model/person";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonGenericService} from "../../../services/person-generic.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit, OnDestroy {

  personForm: FormGroup = this.formBuilder.group({
    id: ['', []],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', [Validators.required, Validators.max(100)]]
  })
  sub: Subscription[] = [];

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private personService: PersonGenericService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id)
        this.buildForm();

      else {
        console.log('El Id es: ' + id)
        this.loadPerson(id);
      }
    })
  }

  ngOnDestroy() {
    this.sub.forEach(s => s.unsubscribe())
  }

  buildForm(p?: Person) {
    if (p) {
      this.personForm.patchValue({
        id: p.id,
        firstName: p.firstName,
        lastName: p.lastName,
        age: p.age
      })
    }
  }

  loadPerson(id: string) {
    this.sub.push(this.personService.findOne(id).subscribe({
      next: (p) => {
        let person = new Person(p.id, p.firstName, p.lastName, p.age);
        this.buildForm(person)
      },
      error: (err) => alert(err)
    }));
  }

  saveData() {
    let p = new Person(
      this.personForm.get("id")?.value,
      this.personForm.get("firstName")?.value,
      this.personForm.get("lastName")?.value,
      this.personForm.get("age")?.value,
    )
    if (!p.id) {
      this.personService.create(p).subscribe({
        next: () => {
          alert("Persona creada con exito")
          this.goBack()
        },
        error: (err) => alert(err)
      })
    } else {
      this.personService.update(p).subscribe({
        next: () => {
          alert("Persona actualizada con exito")
          this.goBack()
        },
        error: (err) => alert(err)
      })
    }
  }

  goBack() {
    this.router.navigate(['']);
  }
}
