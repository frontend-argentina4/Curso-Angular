import {Model} from "./model";

export class Bus {
  id: number;
  patente: string;
  cantidadAsientos: number;
  modeloId: number;
  modelo: Model;

  constructor(id: number, patente: string, cantidadAsientos: number, modeloId: number) {
    this.id = id;
    this.patente = patente;
    this.cantidadAsientos = cantidadAsientos;
    this.modeloId = modeloId;
  }

}
