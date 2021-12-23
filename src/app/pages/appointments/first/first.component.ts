import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  places = ['Argentina', 'Australia', 'España']
  purposes = ['Hablar', 'Hacer algo', 'Correr']
  experts = ['BATH', 'KITCHEN', 'CLOSETS', 'COVERNINGS', 'COUNTERTOPS', 'FURNITURE']
  participants = ['Client', 'Architect', 'Contractor', 'Installer', 'Other']
  step = 1;
  appointment:FormGroup

  expertNeeded = false;
  otherParticipants = false;
  participantsValues:Participant[] = [
    {type:'', name:'', lastName:'', email:''}
  ]

  constructor(private fb:FormBuilder) {
    this.appointment = this.fb.group({
      place:[],
      purpose:[],
      projectName:[],
      expertCategory:[],
      participants:[]
    })
  }

  ngOnInit(): void {
  }

  selOption(section:string, more:boolean){
    if(section == 'expert') this.expertNeeded = more
    if(section == 'participant') this.otherParticipants = more
  }

  createParticipant(){
    this.participantsValues.push(new Participant())
  }

  continue(){
    console.log(this.appointment.value)
    console.log(this.participantsValues)
    this.step++
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