import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  loginComponent = false;
  passwordComponent = false;
  registerComponent = false;
  editComponent = false;
  
  constructor(
    public session:SesionService
  ) { }

  ngOnInit(): void {
  }

  openComponent(component:string){
    this.loginComponent = false
    if(component === 'register') this.registerComponent = true
    if(component == 'forgot') this.passwordComponent = true
  }

  closeComponent(component:string){
    if(component == 'login') this.loginComponent = false
    if(component == 'forgot') this.passwordComponent = false
    if(component == 'register') this.registerComponent = false
    if(component == 'edit') this.editComponent = false
  }

  logout(){
    this.loginComponent = false;
    this.passwordComponent = false
    this.registerComponent = false
    this.editComponent = false;
    this.session.islogged = false;
    this.session.logout()
  }
}
