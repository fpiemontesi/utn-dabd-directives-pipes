import { Component, Input, OnInit } from '@angular/core';
import { Auto } from '../auto';

@Component({
  selector: 'a-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  @Input() auto?: Auto;
  mostrar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  mostrame() {
    this.mostrar = !this.mostrar;
  }

}
