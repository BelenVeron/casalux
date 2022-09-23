import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  error_text:string = '';
  @Output() openPasswordComponent = new EventEmitter()
  @Output() openRegisterComponent = new EventEmitter()
  @Output() closeLoginComponent = new EventEmitter()

  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private session:SesionService
  ) {
    this.login = this.fb.group({
      emailUser: '',
      password: '',
    })

  }

  ngOnInit(): void { }

  log(){
    this.auth.login(this.login.value).subscribe((data:any)=>{
      console.log(data)
      if(data.success){
        this.session.islogged = true
        this.session.sessionData = data.data[0][0]
        this.closeComponent()
        if(data.data[1].locationRedirect){
          window.location.href = data.data[1].locationRedirect
        }
      }else{
        this.error_text = data.msg
      }
    }, err=>{
      this.error_text = 'Server error'
      console.log(err)
    })
  }

  openForgotPasswordComponent(){
    this.openPasswordComponent.emit(true)
  }

  openRegisterComponent_(){
    // this.openRegisterComponent.emit(true)
    window.location.href = 'https://casaluxcorp.com/register.php'
  }

  closeComponent(){
    this.closeLoginComponent.emit(true)
  }
}
