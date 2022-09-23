import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../register/register.component.css']
})
export class EditComponent implements OnInit {

  editForm:FormGroup;
  company = false;

  user:UserModel = this.session.sessionData
  error_text = ''
  errorClass = ''
  @Output() closeEdit = new EventEmitter()

  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private session:SesionService
  ) {
    this.editForm = this.fb.group({
      idUser:[this.user.idUser, []],
      nameUser:[this.user.nameUser, []],
      lastnameUser:[this.user.lastnameUser, []],
      phoneUser:[this.user.phoneUser, []],
      emailUser:[this.user.emailUser, []],
      addressUser:[this.user.addressUser, []],
      cityUser:[this.user.cityUser, []],
      stateUser:[this.user.stateUser, []],
      zipcodeUser:[this.user.zipCodeUser, []],
      companyCode:[this.user.companyCode, []],
      nameCompany:[this.user.nameCompany, []],
      companyPosition:[this.user.companyPosition, []],
      specialty:[this.user.specialty, []],
    })

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
}
