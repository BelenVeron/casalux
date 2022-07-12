import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfigButton } from 'src/app/models/interfaces/config-button';

@Component({
  selector: 'app-vertical-description',
  templateUrl: './vertical-description.component.html',
  styleUrls: ['./vertical-description.component.css']
})


export class VerticalDescriptionComponent implements OnInit {

  @Output() sendClickDesign = new EventEmitter<boolean>();
  @Input() items:any = {};
  configStart: ConfigButton = {type:"start", text:"DESIGN YOUR CLOSET"}
  configDownload: ConfigButton = {type:"download",  text:"Download Catalog", icon:"fas fa-download"}

  constructor() { }

  ngOnInit(): void {
  }

  clickDesign(): void {
    this.sendClickDesign.emit();
  }

}
