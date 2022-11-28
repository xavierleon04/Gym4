import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }

  getEmplados(){
    return this.empleados;
  }

  private empleados : Empleados [] = [
    {
    Id_Empleado:1,
    Id_Suc:1,
    Nombre:"Javier",
    Apellido:"Contrteras",
    Puesto:"Entrenador",
    Img:"assets/empleados/avatar5.png",
    Estatus: true
    },
    {
    Id_Empleado:2,
    Id_Suc:1,
    Nombre:"Luisa",
    Apellido:"Lopez",
    Puesto:"Recepcionista",
    Img:"assets/empleados/avatar2.png",
    Estatus:true
    },
    {
    Id_Empleado:3,
    Id_Suc:1,
    Nombre:"Luis",
    Apellido:"Garcia",
    Puesto:"Mantenimiento",
    Img:"assets/empleados/avatar04.png",
    Estatus:true
    }
  ];
}
export interface Empleados{
  Id_Empleado:number,
    Id_Suc:number,
    Nombre:String,
    Apellido:String,
    Puesto:String,
    Img:String,
    Estatus: boolean
}
