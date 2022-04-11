import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-title',
  templateUrl: './mobile-title.component.html',
  styleUrls: ['./mobile-title.component.css']
})
export class MobileTitleComponent implements OnInit {

  @Input() itemList = {
    title: "COLLECTIONS",
    text: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
