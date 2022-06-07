import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CLOSETS, SHAPES, CLOSET_TYPES, CLOSET_CORNERS} from '../../closets.data';

@Component({
  selector: 'app-steps-starting-closet',
  templateUrl: './steps-starting-closet.component.html',
  styleUrls: ['./steps-starting-closet.component.css']
})
export class StepsStartingClosetComponent implements OnInit {

  closets: any[] = CLOSETS;
  shapes: any[] = SHAPES;
  closetTypes: any[] = CLOSET_TYPES;
  closetCorners: any[] = CLOSET_CORNERS;
  @Output() srcNoImage: EventEmitter<string> = new EventEmitter();
  isMeasuresVisible : boolean = false;
  isFormVisible : boolean = true;
  isUsersVisible : boolean = false;
  isCornersVisible : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  typeSelected(data: any){
    this.srcNoImage.emit(data);
  }

  showMeasures(step: string): void{
    switch (step) {
      case 'measures':
        if(this.isMeasuresVisible===false){
          this.isMeasuresVisible = true;
          this.isFormVisible = false;
        }
        break;

        case 'form':
          if(this.isFormVisible===false){
            this.isFormVisible = true;
            this.isMeasuresVisible = false;
          }
          break;

          case 'users':
            if(this.isUsersVisible===false){
              this.isUsersVisible = true;
              this.isMeasuresVisible = false;
              this.isFormVisible = false;
            }
            break;

            case 'corners':
              if(this.isCornersVisible===false){
                this.isCornersVisible = true;
                this.isMeasuresVisible = false;
                this.isFormVisible = false;
                this.isUsersVisible = false;
              }
              break;
    
      default:
        break;
    }
  }
}
