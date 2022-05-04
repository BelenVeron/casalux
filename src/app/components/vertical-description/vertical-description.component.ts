import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vertical-description',
  templateUrl: './vertical-description.component.html',
  styleUrls: ['./vertical-description.component.css']
})


export class VerticalDescriptionComponent implements OnInit {

  @Output() sendClickDesign = new EventEmitter<boolean>();
  @Input() items:any = {};

  constructor() { }

  ngOnInit(): void {
  }

  clickDesign(): void {
    this.sendClickDesign.emit();
  }

}
