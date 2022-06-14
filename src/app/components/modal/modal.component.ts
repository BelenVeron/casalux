import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() active: string = 'active';
  @Input() type: string = '';
  @Output() sendClose: EventEmitter<string> = new EventEmitter();
  


  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.active = '';
    this.sendClose.emit();
  }

}

