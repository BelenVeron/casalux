import { Component, OnInit } from '@angular/core';
import { ITEMS_NAV } from '../closets.data';

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
  navLeft: boolean = true;
  itemsNav = ITEMS_NAV;
  configNav = {
    center: true,
    username: true,
    search: false,
    title: 'SELECT FINISH',
    title2: true,
  }

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

  setSideNav(event: boolean): void {
    this.activeSidenav = event;
  }
}
