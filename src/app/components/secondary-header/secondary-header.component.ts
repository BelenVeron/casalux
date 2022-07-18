import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigButtonStep } from 'src/app/models/interfaces/config-button-step';
import { ConfigSecondaryHeader } from 'src/app/models/interfaces/config-secondary-header';
import { CONFIG_BUTTONS_STEP } from './secondary-header-data';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.css']
})
export class SecondaryHeaderComponent implements OnInit {

  @Input() config!: ConfigSecondaryHeader;
  buttons: ConfigButtonStep[] = CONFIG_BUTTONS_STEP;
  @Output() sendStep: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeButtonRoute();
  }

  /* 
    Activate the button for the route
  */
  activeButtonRoute(): void {
    this.activeButton(this.getPosition());
  }

  /* 
    Get the position in the array
  */
  getPosition(): number {
    var position = 0;
    for (let i = 0; i < this.buttons.length; i++) {
      if (this.router.url.includes(this.buttons[i].route!)) {
        position = i;
      } ;
    };
    return position;
  }

  /* 
    Set active the button if is inactive
  */
  setActive(button: ConfigButtonStep): void {
    if (!button.src!.includes('-active')) {
      button.src = [button.src!.slice(0, -4) + '-active' + button.src!.slice(-4)].join('');
      button.activeClass = 'active';
      button.complete = true;
    }
  }

  /* 
    Set inactive the button if is active
  */
  setInactive(button: ConfigButtonStep): void {
    if (button.src!.includes('-active')) {
      button.src = button.src!.replace('-active', '');
      button.activeClass = ''
    }
  }

  /* 
    Active only if the position is less or equal to the
    current step or if the step is complete.
    Send an event and navigate to the step
  */
  activeButton(i: number): void {
    if (i <= this.getPosition() || this.buttons[i].complete) {
      this.buttons.forEach(button => {
        this.setInactive(button);
      });
      this.setActive(this.buttons[i]);
      this.sendStep.emit(this.buttons[i].text);
      this.router.navigate([`/closets/${this.buttons[i].route}/1`]);
    }
  }

}
