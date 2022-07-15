import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigButton } from 'src/app/models/interfaces/config-button';
import { BUTTONS_MASTER_CLOSET } from "../../closets.data";

@Component({
  selector: 'app-select-master-closet',
  templateUrl: './select-master-closet.component.html',
  styleUrls: ['./select-master-closet.component.css']
})
export class SelectMasterClosetComponent implements OnInit {

  buttons: any = BUTTONS_MASTER_CLOSET;
  configNextButton: ConfigButton = {type:'next-step', text:'NEXT'}
  @Output() sendSetImage: EventEmitter<string> = new EventEmitter();
  @Output() sendContinue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setImage(image: string, i: number): void {
    if(image !== 'no-image')this.sendSetImage.emit(image);
    this.activeButton(i);
  }

  /* Active the button pressed */
  activeButton(i: number) {
    this.buttons.forEach((button: any) => {
      button.config.selected = false;
    });
    this.buttons[i].config.selected = true
  }

  continue(): void {
    this.sendContinue.emit();
  }
}
