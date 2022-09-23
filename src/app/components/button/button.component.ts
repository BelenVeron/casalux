import { Component, Input, OnInit } from '@angular/core';
import { ConfigButton } from 'src/app/models/interfaces/config-button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() config!: ConfigButton;

  constructor() { }

  ngOnInit(): void {
  }

}

