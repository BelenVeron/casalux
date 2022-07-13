import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigButton } from 'src/app/models/interfaces/config-button';
import { SHOW_HIDE_IMAGE_CLOSETS } from '../../closets.data';

@Component({
  selector: 'app-select-module',
  templateUrl: './select-module.component.html',
  styleUrls: ['./select-module.component.css']
})
export class SelectModuleComponent implements OnInit {

  images: any = SHOW_HIDE_IMAGE_CLOSETS;
  configNextButton: ConfigButton = {type:'next-step', text:"NEXT"};
  @Output() sendContinue: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  continue(): void {
    this.sendContinue.emit();
  }

}
