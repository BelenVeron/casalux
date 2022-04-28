import { Component, OnInit } from '@angular/core';
import { ITEMS_NAV } from '../closets.data';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  activeSidenav: boolean = false;
  itemsNav = ITEMS_NAV;
  

  constructor() { }

  ngOnInit(): void {
  }

  activeMenu(): void {
    this.activeSidenav = !this.activeSidenav;
  }

}
