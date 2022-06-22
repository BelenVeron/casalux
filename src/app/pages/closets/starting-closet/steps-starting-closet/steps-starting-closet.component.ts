import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CLOSETS, SHAPES, CLOSET_TYPES, CLOSET_CORNERS} from '../../closets.data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-steps-starting-closet',
  templateUrl: './steps-starting-closet.component.html',
  styleUrls: ['./steps-starting-closet.component.css']
})
export class StepsStartingClosetComponent implements OnInit {

  closets: any[] = CLOSETS;
  shapes: any[] = SHAPES;
  closetTypes: any[] = CLOSET_TYPES;
  closetCorners: any[] = CLOSET_CORNERS;
  @Output() srcNoImage: EventEmitter<string> = new EventEmitter();
  isMeasuresVisible : boolean = false;
  isFormVisible : boolean = true;
  isUsersVisible : boolean = false;
  isCornersVisible : boolean = false;
  steps: boolean[] = [true, false, false, false, false, false];
  isModuleSelected: boolean = false;
  buttonsDisabled: boolean[] = [true, true, true, true, true, true];
  shapeSelected: string = '';

  constructor(
    public router: Router
    ) { }

  ngOnInit(): void {
  }

  typeSelected(data: any){
    this.srcNoImage.emit(data);
  }

  /* showStep(step: number): void{
    for (let index = 0; index < this.steps.length; index++) {
      this.steps[index] = false;
    };
    this.steps[step] = true;
  } */

  selectStepAndContinue(step: number): void {
    console.log(step)
    if (step < 3) {
      this.steps[step] = false;
      this.steps[step + 1] = true;
    } else {
      this.router.navigate(['closets/master-closet/1']);
    }
  }

  activeButton(shape: string, button: number): void{
    this.shapeSelected = shape;
    this.buttonsDisabled[button] = false;
  }
}
