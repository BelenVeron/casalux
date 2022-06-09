import { Component, OnInit } from '@angular/core';
import { SHOW_HIDE_IMAGE_CLOSETS } from '../../closets.data';

@Component({
  selector: 'app-select-module',
  templateUrl: './select-module.component.html',
  styleUrls: ['./select-module.component.css']
})
export class SelectModuleComponent implements OnInit {

  images: any = SHOW_HIDE_IMAGE_CLOSETS;

  constructor() { }

  ngOnInit(): void {
  }

}
