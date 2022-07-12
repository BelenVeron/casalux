import { Component, Input, OnInit, Output } from '@angular/core';
import { ConfigSecondaryHeader } from 'src/app/models/interfaces/config-secondary-header';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.css']
})
export class SecondaryHeaderComponent implements OnInit {

  @Input() config!: ConfigSecondaryHeader;

  constructor() { }

  ngOnInit(): void {
  }

}
