import { Component, OnInit } from '@angular/core';
import { ITEMS_NAV } from '../closets.data';

@Component({
  selector: 'app-index-closets',
  templateUrl: './index-closets.component.html',
  styleUrls: ['./index-closets.component.css']
})
export class IndexClosetsComponent implements OnInit {

  activeSidenav: boolean = false;
  itemsNav = ITEMS_NAV;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(): void {
    this.activeSidenav = true;
  }

  closeMenu():void {
    this.activeSidenav = false;
  }

  setSideNav(event: boolean): void {
    this.activeSidenav = event;
  }

}
