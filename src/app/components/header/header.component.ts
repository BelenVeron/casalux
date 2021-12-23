import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  editComponent = false;

  constructor(public session:SesionService) { }

  ngOnInit(): void {
  }

  logout(){

  }

}
