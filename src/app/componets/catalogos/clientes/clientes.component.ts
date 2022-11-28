import { Component, OnInit } from '@angular/core';
import { Clientes, ClientesService } from 'src/app/Services/clientes.service';
import { SwitchService } from 'src/app/Services/switch.service';
import { Tarifas, TarifasService } from 'src/app/Services/tarifas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  nombre: string = '';
  p_Apellido: string = '';
  seg_Apellido: string = '';
  Telefono: string = '';

  payment: any = [];
  clientes: Clientes[] = [];
  tarifas: Tarifas[] = [];

  dias: number = 0;
  fech: any = 0;
  dateVar: number = 0;
  ext: number = 0;

  modal: boolean = true;
  tari: boolean = false;
  buscador: boolean = false;
  termino: string = '';

  constructor(
    private serveice: ClientesService,
    private modalS: SwitchService,
    private serviceT: TarifasService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.serveice.consoleClientes()?.subscribe((request) => {
      console.log(request);
      this.payment = request;
    });
    //this.clientes = this.serveice.getCliente();

    this.tarifas = this.serviceT.getTarifa();

    this.modalS.$modal.subscribe((valor) => (this.modal = valor));

    console.info(Date());
  }

  onChange(target: any) {
    let fin = target.value;
    console.log(fin);
    this.dias = fin;

    this.tari = true;
    this.obtenerInicio();
    this.obtenerFin();
  }

  openAgregar() {
    this.modal = true;
  }
  openEditar() {
    this.modal = true;
  }

  obtenerInicio() {
    this.dateVar = new Date().getTime();
    console.log(this.dateVar);
  }

  obtenerFin() {
    this.ext = this.dateVar + this.dias;

    console.log(this.ext);
  }

  buscarCliente(termino: string) {
    console.log(termino);
    this.modal = false;
    this.clientes.splice(0);

    this.clientes.find((array) => console.log(array));
  }
}
