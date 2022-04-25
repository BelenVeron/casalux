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
  @Input() like: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
