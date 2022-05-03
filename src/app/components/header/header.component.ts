import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
  export class HeaderComponent implements OnInit {

  editComponent = false;

  constructor(public session:SesionService, private api:ApiService) { }

  ngOnInit(): void {
  }

  logout(){
    this.session.islogged = false;
    this.session.logout()
    this.api.navigate('/')
  }

  drop(element:any){
    element.parentNode.classList.toggle('closed')
  }
}
