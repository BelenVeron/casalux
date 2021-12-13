import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  editForm:FormGroup
  company = false;

  error_text = ''
  errorClass = ''
  @Output() closeEdit = new EventEmitter()

  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private service:ApiService
  ) {
    this.editForm = this.fb.group({
      nameUser:['', []],
      lastnameUser:['', []],
      phoneUser:['', []],
      emailUser:['', []],
      addressUser:['', []],
      cityUser:['', []],
      stateUser:['', []],
      zipcodeUser:['', []],
      companyCode:['', []],
      nameCompany:['', []],
      companyPosition:['', []],
      specialty:['', []],
    });
  }

  ngOnInit(): void {
  }


  edit(){
    console.log(this.editForm.value)
    this.auth.edit(this.editForm.value).subscribe((data:any)=>{
      console.log(data)
      this.errorClass = data.success?'success':'error'
      this.error_text = data.msg
    }, err => {
      this.error_text = 'Server error'
    })
  }

  closeComponent(){
    this.closeEdit.emit(true)
  }

  searchCompany(id:string, name:HTMLInputElement){
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
