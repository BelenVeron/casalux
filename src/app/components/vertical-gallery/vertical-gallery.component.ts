import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vertical-gallery',
  templateUrl: './vertical-gallery.component.html',
  styleUrls: ['./vertical-gallery.component.css']
})
export class VerticalGalleryComponent implements OnInit {

  @Input() type: string = '';
  @Input() items: any = [];
  @Input() itemSelected: any = {};
  @Output() sendSelectedItem = new EventEmitter<any>();
  url = environment.api
  @Input() collections: boolean = false;
  @Input() closets: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeSelectedItem(index: number): void {
    this.sendSelectedItem.emit(index);
  }

}
