import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {

  @Input() shapes: any[] = [];
  @Output() sendShape: EventEmitter<string> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  getColor(shape: any) {
    if (shape.value != 'Island') {
      this.shapes.map(item => {
        if (item.value === shape.value && item.value != 'Island'){
          (item.color === 'fff')? item.color='#7A9A01' : item.color='fff';
        }else{
          item.color='fff'
        }
      });
    }
    this.sendShape.emit(shape.value);
  }

}
