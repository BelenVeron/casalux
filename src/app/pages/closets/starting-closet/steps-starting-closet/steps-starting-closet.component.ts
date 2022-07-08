import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CLOSETS, SHAPES, CLOSET_TYPES, CLOSET_CORNERS} from '../../closets.data';
import { Router } from '@angular/router';
import { ConfigSwiperHorizontal } from 'src/app/models/config-swiper-horizontal';
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
  closetTypes: any[] = CLOSET_TYPES;
  closetCorners: any[] = CLOSET_CORNERS;
  // event to send the image selected to the left container
  @Output() srcNoImage: EventEmitter<string> = new EventEmitter();
  steps: boolean[] = [true, false, false, false, false];
  buttonsDisabled: boolean[] = [true, false, false, false, true];
  shapeSelected: string = '';
  configFirstCorners: ConfigSwiperHorizontal = {
    class: 'horizontal-mini',
    swiper: {
      loopedSlides: 1,
      slidesPerView: 3,
      initialSlide: 0,
      spaceBetween: 10,
      navigation: false,
      centeredSlides:true,
      allowTouchMove: false,
      loop:true,
    },
    items: CLOSET_CORNERS
  }

  constructor(
    public router: Router
    ) { }

  ngOnInit(): void {
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
    if (!this.buttonsDisabled[step]) {
      for (let index = 0; index < this.steps.length; index++) {
        this.steps[index] = false;
      };
      this.steps[step] = true;
    }
  }

  /* 
    Active the next step
    If is the last step then redirect to the next page
  */
  selectStepAndContinue(step: number): void {
    if (step < 3) {
      this.steps[step] = false;
      this.steps[step + 1] = true;
      // select a default image in the third step
      if (step === 2) {
        this.typeSelected(this.closetCorners[0].src)
      }
    } else {
      this.router.navigate(['closets/master-closet/1']);
    }
  }

  // Activate the disabled button
  activeButton(shape: string, button: number): void{
    this.shapeSelected = shape;
    this.buttonsDisabled[button] = false;
  }
}
