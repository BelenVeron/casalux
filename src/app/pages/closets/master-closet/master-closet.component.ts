import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-closet',
  templateUrl: './master-closet.component.html',
  styleUrls: ['./master-closet.component.css']
})
export class MasterClosetComponent implements OnInit {

  activeSidenav: boolean = false;
  isMasterSelected: boolean = false;
  type = '';
  src = '/assets/img/closets/master-closet1.png';
  

  constructor() { }

  ngOnInit(): void {
  }
  openMenu(): void {
    this.activeSidenav = true;
  }

  setImage(image: string): void {
    if(image !== 'no-image')this.src = image;
  }

  selectClosetAndContinue() : void {
    this.isMasterSelected = true;
  }
}
