import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigButton } from 'src/app/models/interfaces/config-button';

@Component({
  selector: 'app-steps-master-closet',
  templateUrl: './steps-master-closet.component.html',
  styleUrls: ['./steps-master-closet.component.css']
})
export class StepsMasterClosetComponent implements OnInit {
  
  stepsFinish: boolean[] = [true, false, false, false, false, false];
  @Output() sendContinue: EventEmitter<string> = new EventEmitter();
  configNextButton: ConfigButton[] = [
    {type:'next-step', text:"NEXT", disabled:false},
    {type:'next-step', text:"NEXT", disabled:true},
    {type:'next-step', text:"NEXT", disabled:true},
    {type:'next-step', text:"NEXT", disabled:true},
    {type:'next-step', text:"NEXT", disabled:true},
    {type:'next-step', text:"NEXT", disabled:true},
  ]


  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  showStep(step: number): void{
    for (let index = 0; index < this.stepsFinish.length; index++) {
      this.stepsFinish[index] = false;
    };
    this.stepsFinish[step] = true;
  }
  
  continue(): void {
    this.sendContinue.emit();
  }

  selectStepAndContinue(step: number): void {
    if (step < 5) {
      this.stepsFinish[step] = false;
      this.stepsFinish[step + 1] = true;
      this.configNextButton[step + 1].disabled = false;
    } else {
      this.router.navigate(['closets/dimensions/1']);
    }
    
  }

}
