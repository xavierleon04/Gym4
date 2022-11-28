import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarifasService {

  constructor() { }

  getTarifa(){
    return this.tarifas;
  }

  private tarifas : Tarifas [] = [
    {
    Id_Tarifa: 1,
    Descripcion: "Dia",
    Monto:30,
    Dias : 1
    },
    {
    Id_Tarifa:2,
    Descripcion:"Semanal",
    Monto:140,
    Dias : 7
    },
    {
    Id_Tarifa: 3,
    Descripcion: "Mensual",
    Monto:300,
    Dias : 30
    },
    {
    Id_Tarifa: 4,
    Descripcion : "Trimestral",
    Monto: 750,
    Dias : 90
    },
    {
    Id_Tarifa:5,
    Descripcion:"Semestral",
    Monto:1200,
    Dias:180
    },
    {
    Id_Tarifa:6,
    Descripcion:"Anual",
    Monto:2200,
    Dias:365
    }
  ];
}
export interface Tarifas{
  Id_Tarifa:number
  Descripcion:String
  Monto:number
  Dias:number
}
