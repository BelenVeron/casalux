import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  company = false;
  error_text = ''
  errorClass = ''

  @Output() closeRegister = new EventEmitter()

  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private service:ApiService
  ) {
    this.registerForm = this.fb.group({
      name:[null, []],
      lastName:[null, []],
      phone:[null, []],
      address:[null, []],
      city:[null, []],
      state:[null, []],
      zipCode:[null, []],
      email:[null, []],
      codeCompany:[null, []],
      nameCompany:[null, []],
      positionCompany:[null, []],
      specialtyCompany:[null, []],
    })
  }

  ngOnInit(): void {
  }


  register(){
    console.log(this.registerForm.value)
    this.auth.register(this.registerForm.value).subscribe((data:any)=>{
      if(data.success){
        console.log(data)
        this.errorClass = 'success'
        this.error_text = data.msg
        // this.closeRegister.emit(true)
      }else{
        this.errorClass = 'error'
      }
    }, err =>{
      this.error_text = 'Server error'
      this.errorClass = 'error'
    })
  }

  closeComponent(){
    this.closeRegister.emit(true)
  }

  searchCompany(id:string, name:HTMLInputElement){
    if(id.length==9) name.value = ''
    if(id.length==9){
      this.service.get(`search_company_code.php?companyCode=${id}`).subscribe((data:any)=>{
        console.log(data)
        name.value= data.data[0].nameCompany
      })
    }else{
      return
    }
  }
}
