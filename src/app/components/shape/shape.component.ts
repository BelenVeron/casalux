import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {

  @Input() shapes: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getColor(shape: any) {
    this.shapes.map(item => {
      if (item.value === shape.value){
        (item.color === 'rgba(96, 96, 72)')? item.color='#7A9A01' : item.color='rgba(96, 96, 72)'
      }
    })
  }

}
