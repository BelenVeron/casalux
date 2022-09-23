import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../login/login.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  rememberForm:FormGroup;
  error = false
  error_text = ''
  response = false

  @Output() closeLoginComponent = new EventEmitter()

  constructor(
    private fb:FormBuilder,
    private auth:AuthService
  ) {
    this.rememberForm = this.fb.group({
      emailUser:['']
    })
  }

  ngOnInit(): void {
  }

  remember(){
    if(!this.rememberForm.controls['emailUser'].value){
      this.error = true
      this.response = true
      this.error_text = 'Complete your email'
      return
    }
    this.auth.remember(this.rememberForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.success) this.error = true;
      else this.error = false
      this.error_text = data.msg
      this.response = true
    }, err =>{
      this.error_text = 'Server error'
      this.response = true
    })
  }

  closeComponent(){
    this.closeLoginComponent.emit(true)
  }
}
