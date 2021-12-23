import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['../index/index.component.css', '../../components/register/register.component.css', './set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  @Output() closeSetPassword = new EventEmitter()

  setPasswordForm:FormGroup
  error_text = ''
  errorClass = ''

  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private service:ApiService,
    private route:ActivatedRoute
  ) {
    var idUser = this.route.snapshot.params.id
    var emailUser = this.isParam('email')
    var companyCode = this.isParam('companyCode')
    var companyPosition = this.isParam('companyPosition')
    var specialty = this.isParam('specialty')

    this.setPasswordForm = this.fb.group({
      idUser: [idUser],
      emailUser: [emailUser],
      companyCode: [companyCode],
      companyPosition: [companyPosition],
      specialty: [specialty],
      password:[null, []],
      password1:[null, []],
    })
  }
  ngOnInit(): void {
  }

  setPassword(){
    var pass = this.setPasswordForm.controls['password'].value;
    var pass1 = this.setPasswordForm.controls['password1'].value;
    if(pass != pass1) {
      this.error_text = 'Passwords does not match';
      this.errorClass = 'error';
      return
    }
    this.auth.setPassword(this.setPasswordForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.success){
        this.error_text = data.msg
        this.errorClass = 'success'
        setTimeout(()=>{
          this.service.navigate('')
        }, 2000)
      }
    })
  }

  closeComponent(){
    this.closeSetPassword.emit(true)
  }

  isParam(param:string){
    var paramValue = this.route.snapshot.params[param]
    if(paramValue) return paramValue 
    else return ''
  }
}
