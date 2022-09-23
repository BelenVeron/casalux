import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfigButton } from 'src/app/models/interfaces/config-button';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() active: string = 'active';
  @Input() type: string = '';
  @Output() sendClose: EventEmitter<string> = new EventEmitter();
  configMoreButton: ConfigButton = {type:"more", text:"See More..."}
  configProceedButton: ConfigButton = {type:"border", text:"PROCEED TO SECTION"}
  configLoginButton: ConfigButton = {type:"login", text:"Go to", link:"Login"}
  configNewButton: ConfigButton = {type:"new-project", text:"NEW PROJECT"}
  configExistingButton: ConfigButton = {type:"existing-project", text:"EXISTING PROJECT"}
  configLoginOrButton: ConfigButton = {type:"login", text:"or"}
  configContinueButton: ConfigButton = {type:"continue", text:"CONTINUE"}
  configStartButton: ConfigButton = {type:"start-video", text:"START"}
  


  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.active = '';
    this.sendClose.emit();
  }

}

