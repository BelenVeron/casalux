import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-first',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class FirstComponent implements OnInit {

  places = []
  purposes = []
  experts = ['Client', 'Architect', 'Contractor', 'Installer', 'Other']
  participants = ['Client', 'Architect', 'Contractor', 'Installer', 'Other']
  step = 1;
  appointment:FormGroup

  expertNeeded = false;
  otherParticipants = false;
  participantsValues:Participant[] = []
  participant = new Participant()

  constructor(private fb:FormBuilder,
    private apmt:AppointmentService,
    private session:SesionService,
    private api:ApiService) {

    if(!this.session.islogged) this.api.navigate('/')

    this.apmt.getPlaces().subscribe(async (data:any)=>{
      this.places = await data.data.length>0?data.data:['SERVER ERROR'];
    })
    this.apmt.getPurposes().subscribe(async (data:any)=>{
      this.purposes = await data.data.length>0?data.data:['SERVER ERROR'];
    }, err=>{
      this.appointment.value.purpose = 'SERVER ERROR'
    })
    this.appointment = this.fb.group({
      place:['', [Validators.required]],
      purpose:['', [Validators.required]],
      projectName:['', [Validators.required]],
      expertCategory:['', [Validators.required]],
      participants:['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  selOption(section:string, more:boolean){
    if(section == 'expert') this.expertNeeded = more
    if(section == 'participant') this.otherParticipants = more
  }

  createParticipant(){
    if(this.participant.type=='' || this.participant.name=='' ||
    this.participant.lastName=='' || this.participant.email=='') return
    this.participantsValues.push(this.participant)
    this.participant = new Participant()
  }
  
  setInvalid(item:string){
    return this.appointment.controls[item].invalid && this.appointment.controls[item].touched
  }
  continue(){
    if(this.validatePlacePurpose() && this.step == 1){
      this.appointment.controls['purpose'].markAsTouched()
      this.appointment.controls['place'].markAsTouched()
      return
    }
    if(this.validateProjectName() && this.step == 2){
      this.appointment.controls['projectName'].markAsTouched()
      return
    }
    this.step++
    if(this.step == 5){
      this.apmt.setVariables(this.appointment.value).subscribe((data:any)=>{
        console.log(data)
        if(data.success) window.location.href = 'apmt5.php'
      })
    }
    if(this.step == 3){
      this.apmt.getExperts().subscribe((data:any)=>{
        console.log(data)
        this.experts = data.data.length>0?data.data:['SERVER ERROR'];
      })
    }
    this.appointment.value.participants = this.participantsValues
    console.log(this.appointment.value)
  }
  validatePlacePurpose(){
    return (this.appointment.controls['place'].invalid || this.appointment.controls['purpose'].invalid)
  }
  validateProjectName(){
    return this.appointment.controls['projectName'].invalid
  }

}
interface Participant {
  type:string;
  name:string;
  lastName:string;
  email:string;
}
class Participant {
  type = '';
  name = '';
  lastName = '';
  email = '';
}