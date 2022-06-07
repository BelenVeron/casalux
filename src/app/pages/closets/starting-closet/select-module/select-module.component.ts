import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-module',
  templateUrl: './select-module.component.html',
  styleUrls: ['./select-module.component.css']
})
export class SelectModuleComponent implements OnInit {

  mostrar: boolean = false;
  mostrar2: boolean = false;
  mostrar3: boolean = false;
  mostrar4: boolean = false;
  mostrar5: boolean = false;
  mostrar6: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrar1(): void {
    this.mostrar = !this.mostrar;

  }
  mostrarW01A(): void {
    this.mostrar2 = !this.mostrar2;
  }
  mostrarW02(): void {
    this.mostrar3 = !this.mostrar3;
  }
  mostrarW02A(): void {
    this.mostrar4 = !this.mostrar4;
  }
  mostrarW03(): void {
    this.mostrar5 = !this.mostrar5;
  }
  mostrarW04(): void {
    this.mostrar6 = !this.mostrar6;
  }

}
