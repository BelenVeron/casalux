import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = '';
  @Input() type: string = '';
  @Input() link: string = '';
  @Input() icon: string = '';
  @Input() like: boolean = false;
  @Input() disabled: boolean = false;
  
  @Input()config: any;




  constructor() { }

  ngOnInit(): void {
  }

}

export interface ConfigButton {
  text: string;
  type: string;
  link: string;
  icon: string;
  disabled: boolean;
}
