import { Component, OnInit } from '@angular/core';
import { WALK_IN_IMAGES, ITEMS_NAV } from '../closets.data';

@Component({
  selector: 'app-walk-in',
  templateUrl: './walk-in.component.html',
  styleUrls: ['./walk-in.component.css']
})
export class WalkInComponent implements OnInit {

  activeSidenav: boolean = false;
  navLeft: boolean = true;
  itemsNav = ITEMS_NAV;
  walkInImages = WALK_IN_IMAGES;
  
  constructor() { }

  ngOnInit(): void {
  }

  openMenu(): void {
    this.activeSidenav = true;
  }

  setSideNav(event: boolean): void {
    this.activeSidenav = event;
  }

}
