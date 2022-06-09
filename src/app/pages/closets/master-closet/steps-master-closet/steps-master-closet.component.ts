import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps-master-closet',
  templateUrl: './steps-master-closet.component.html',
  styleUrls: ['./steps-master-closet.component.css']
})
export class StepsMasterClosetComponent implements OnInit {
  steps: boolean[] = [true, false, false, false];
  constructor() { }

  ngOnInit(): void {
  }

  showStep(step: number): void{
    for (let index = 0; index < this.steps.length; index++) {
      this.steps[index] = false;
    };
    this.steps[step] = true;
  }
}
