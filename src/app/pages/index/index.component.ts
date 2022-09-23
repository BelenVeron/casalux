import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public session:SesionService,
    private route:ActivatedRoute
  ) {
    var section = this.route.snapshot.params.section
    switch(section){
      case 'login':
        this.loginComponent = true
        break;
      case 'password':
        this.passwordComponent = true
        break;
      case 'edit':
        this.editComponent = true
        break;
    }
   }

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
