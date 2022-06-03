import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CLOSETS, SHAPES, CLOSET_tYPES} from '../../closets.data';

@Component({
  selector: 'app-steps-starting-closet',
  templateUrl: './steps-starting-closet.component.html',
  styleUrls: ['./steps-starting-closet.component.css']
})
export class StepsStartingClosetComponent implements OnInit {

  closets: any[] = CLOSETS;
  shapes: any[] = SHAPES;
  closetTypes: any[] = CLOSET_tYPES;
  @Output() srcNoImage: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  typeSelected(data: any){
    this.srcNoImage.emit(data);
  }

}
