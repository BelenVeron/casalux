import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CLOSETS, SHAPES, CLOSET_TYPES, CLOSET_CORNERS} from '../../closets.data';

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

  constructor() { }

  ngOnInit(): void {
  }

  typeSelected(data: any){
    this.srcNoImage.emit(data);
  }

  showStep(step: number): void{
    for (let index = 0; index < this.steps.length; index++) {
      this.steps[index] = false;
    };
    this.steps[step] = true;
  }
}
