import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  // Start text value
  startValue: number = 35;
  // Value of the slider, steps
  sliderValue: number = 0;
  // Text value to set if it is changed
  textValue: number = 35;
  // Boolean if it is necessary to show 1/2
  half: boolean = false;
  // Max steps of the slider
  max: number = 21;
  // step of begin
  min: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  /* 
    Set the position of the text in the h4
  */
  position(): number {
    return this.sliderValue/20* 230 + 20
  }
  
  /* 
    Set the value of the text and add the 1/2 if
    it is necessary
  */
  setSliderValue(value: any): void {
    this.sliderValue = parseInt(value.target.value);
    this.textValue = this.startValue + Math.floor(this.sliderValue/2)
    this.sliderValue%2? this.half = true: this.half = false
  }

}
