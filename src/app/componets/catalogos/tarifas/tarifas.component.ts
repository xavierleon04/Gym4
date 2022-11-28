import { Component, OnInit } from '@angular/core';
import { Tarifas,TarifasService } from 'src/app/Services/tarifas.service';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  tarifas : Tarifas [] = [];

  modal:boolean = false;

  constructor(private service : TarifasService) { }
  

  ngOnInit(): void {

    this.tarifas =  this.service.getTarifa();
  }

}
