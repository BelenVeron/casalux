import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CLOSETS, SHAPES, CLOSET_CORNERS, CONFIG_FIRST_CORNERS} from '../../closets.data';
import { Router } from '@angular/router';
import { ConfigSwiperHorizontal } from 'src/app/models/interfaces/config-swiper-horizontal';
import { ConfigButton } from 'src/app/models/interfaces/config-button';
@Component({
  selector: 'app-steps-starting-closet',
  templateUrl: './steps-starting-closet.component.html',
  styleUrls: ['./steps-starting-closet.component.css']
})
export class StepsStartingClosetComponent implements OnInit {

  // menu option
  closets: any[] = CLOSETS;

  // form's shapes
  shapes: any[] = SHAPES;

  closetCorners: any[] = CLOSET_CORNERS;

  // event to send the image selected to the left container
  @Output() srcNoImage: EventEmitter<string> = new EventEmitter();

  // send the step to the starting-closet
  @Output() sendSteps: EventEmitter<boolean[]> = new EventEmitter();
  
  @Output() sendUserEvent: EventEmitter<string> = new EventEmitter();

  steps: boolean[] = [true, false, false, false, false];

  shapeSelected: string = '';

  configFirstCorners: ConfigSwiperHorizontal = CONFIG_FIRST_CORNERS;

  configNextButton: ConfigButton[] = [
    {type:'next-step', text:"NEXT", disabled:false},
    {type:'next-step', text:"NEXT", disabled:true},
    {type:'next-step', text:"NEXT", disabled:true},
    {type:'next-step', text:"NEXT", disabled:true},
  ]

  configNewUserButton: ConfigButton = {type:'new-user', text:"NEW USER", disabled:false}
  
  users: string[] = ['', '']; 


  constructor(
    public router: Router
    ) { }

  ngOnInit(): void {
    
  }

  sendUser(user: string): void {
    this.sendUserEvent.emit(user);
  }

  // click to send the image to left container
  typeSelected(data: any){
    this.srcNoImage.emit(data);
  }

  /* 
    Back to the step if the button is not disabled
    Reset all the step and active the title clicked
  */
  showStep(step: number): void{
    if (!this.configNextButton[step].disabled) {
      for (let index = 0; index < this.steps.length; index++) {
        this.steps[index] = false;
      };
      this.steps[step] = true;
    }
    if (this.steps[0] || this.steps[1]) {
      this.typeSelected('/assets/img/closets/form.png');
    }
    this.sendSteps.emit(this.steps);
  }

  /* 
    Active the next step
    If is the last step then redirect to the next page
  */
  selectStepAndContinue(step: number): void {
    if (step < 4) {
      this.steps[step] = false;
      this.steps[step + 1] = true;
      if (step < 3) {
        this.configNextButton[step + 1].disabled = false;
      }
      // select a default image in the third step
      if (step === 2) {
        this.typeSelected(this.closetCorners[0].src)
      }
    } 
    this.sendSteps.emit(this.steps);
  }

  // Activate the disabled button
  activeButton(shape: string, button: number): void{
    this.shapeSelected = shape;
    this.configNextButton[button].disabled = false;
  }
}
