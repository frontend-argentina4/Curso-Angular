import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {BusService} from "../../../services/bus.service";
import {Bus} from "../../../models/bus";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Person} from "../../../models/person";
import {ModeloService} from "../../../services/modelo.service";
import {Model} from "../../../models/model";
import {PersonDTO, PersonService} from "../../../services/person.service";
import {TripDTO, TripService} from "../../../services/trip.service";
import {Trip} from "../../../models/trip";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit{

  tripForm = this.formBuilder.group({
    origen: ['', Validators.required],
    destino: ['', Validators.required],
    fechaSalida: [new Date(), Validators.required],
    fechaLlegada: [new Date(), Validators.required],
    colectivo: [0, Validators.required],
    pasajeros: [[], Validators.required]
  })

  busList: Bus[] = [];
  personList: Person[] = [];

  selectedTrip: Trip;

  constructor(private formBuilder: FormBuilder,
              private busService: BusService,
              private modeloService: ModeloService,
              private personService: PersonService,
              private tripService: TripService,
              private router: Router,
              private route: ActivatedRoute,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.busService.findAll().subscribe(res => {
      this.busList = res.body.map(json => {
        const bus = new Bus(json.id, json.patente, json.cantidadAsientos, json.modeloId);
        this.findModeloColectivo(bus);
        return bus;
      });
    },
    error => {
      console.log(error);
      this.matSnackBar.open(error, "cerrar")
    })

    this.personService.findAll().subscribe(res => {
      this.personList = res.body.map(json => new Person(json.id, json.age, json.name, json.lastName));
    })

    this.route.paramMap.subscribe(params => {
      const id = params.get("id")
      console.log("El id que estoy editando es: " + id);
      if (id) {
        // @ts-ignore
        this.findTrip(Number(id));
      }
    });
  }

  findTrip(id: number) {
    this.tripService.findOne(id).subscribe(res => {
      this.selectedTrip = res;

      this.tripForm.patchValue({
        origen: res.lugarSalida,
        destino: res.lugarDestino,
        fechaSalida: new Date(res.fechaSalida),
        fechaLlegada: new Date(res.fechaLlegada),
        colectivo: res.idColectivo,
      });

      // @ts-ignore
      this.tripForm.get('pasajeros').setValue(res.personaId);
    })
  }

  findModeloColectivo(colectivo: Bus) {
    this.modeloService.findOne(colectivo.modeloId).subscribe(res => {
      colectivo.modelo = new Model(res.id, res.nombre, res.marca);
    })
  }

  guardarCambios() {
    const pasajeros: number[] = this.tripForm.get('pasajeros').value;

    const body: TripDTO = {
      lugarSalida: this.tripForm.get('origen').value,
      lugarDestino: this.tripForm.get('destino').value,
      fechaLlegada: this.tripForm.get('fechaLlegada').value,
      fechaSalida: this.tripForm.get('fechaSalida').value,
      personaId: pasajeros,
      idColectivo: this.tripForm.get('colectivo').value,
    }

    if (this.selectedTrip && this.selectedTrip.id) {
      // LLamar al metodo actualizar
      console.log("Actualizando una persona");

      body.id = this.selectedTrip.id;

      this.tripService.actualizarViaje(body).subscribe(res => {
        this.matSnackBar.open("Se guardaron los cambios de la persona", "Cerrar");
        this.router.navigate(['trips', 'list']);
      }, error => {
        console.log(error);
        this.matSnackBar.open(error, "Cerrar");
      });
    }
    else {
      this.tripService.crearViaje(body).subscribe(res => {
        this.matSnackBar.open("Se creo la persona correctamente", "Cerrar");
        this.router.navigate(['trips', 'list']);
      }, error => {
        console.log(error);
        this.matSnackBar.open(error, "Cerrar");
      });
    }
  }

  compareObjects(o1: any, o2: any) {
    if(o1 && o2 && o1.id == o2.id)
      return true;

    else
      return false
  }

}
