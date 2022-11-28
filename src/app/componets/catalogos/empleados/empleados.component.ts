import { Component, OnInit } from '@angular/core';
import { Empleados,EmpleadosService } from 'src/app/Services/empleados.service';
import { Puestos, PuestosService } from 'src/app/Services/puestos.service';
import { SwitchService } from 'src/app/Services/switch.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleado : Empleados [] = [];
  puestos : Puestos [] = [] ;
  modal:boolean = false;

  constructor( private service : EmpleadosService,
              private serviceP : PuestosService,
              private modalS : SwitchService) { }

  ngOnInit(): void {
    this.empleado = this.service.getEmplados();
    this.puestos = this.serviceP.getPuestos();
    this.modalS.$modal.subscribe((valor)=> (this.modal = valor))
  }
  openAgregar(){
    this.modal = true;
  }
}
