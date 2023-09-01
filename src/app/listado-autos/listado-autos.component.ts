import { Component, OnInit } from '@angular/core';
import { Auto } from '../auto';

@Component({
  selector: 'a-listado-autos',
  templateUrl: './listado-autos.component.html',
  styleUrls: ['./listado-autos.component.css'],
})
export class ListadoAutosComponent implements OnInit {
  autos: Auto[] = [
    new Auto('Ford', true, false),
    new Auto('Chevrolet', false, false)
  ];
  nuevoAuto: string = '';

  constructor() {}

  ngOnInit(): void {}

  modificarNuevoAuto(evento: any) {
    this.nuevoAuto = evento.target.value;
  }

  agregar() {
    this.autos.push(new Auto(this.nuevoAuto, true, true));
    this.nuevoAuto = '';
  }
}
