import { Component, OnInit } from '@angular/core';
import { WALK_IN_IMAGES, ITEMS_NAV } from '../closets.data';

@Component({
  selector: 'app-walk-in',
  templateUrl: './walk-in.component.html',
  styleUrls: ['./walk-in.component.css']
})
export class WalkInComponent implements OnInit {

  activeSidenav: boolean = false;
  walkInImages = WALK_IN_IMAGES;
  itemsNav = ITEMS_NAV;
  

  constructor() { }

  ngOnInit(): void {
  }

  activeMenu(): void {
    this.activeSidenav = !this.activeSidenav;
  }

}
