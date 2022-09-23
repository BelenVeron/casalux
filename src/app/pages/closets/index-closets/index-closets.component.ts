import { Component, OnInit } from '@angular/core';
import { ITEMS_NAV } from '../closets.data';

@Component({
  selector: 'app-index-closets',
  templateUrl: './index-closets.component.html',
  styleUrls: ['./index-closets.component.css']
})
export class IndexClosetsComponent implements OnInit {

  activeSidenav: boolean = false;
  navLeft: boolean = true;
  itemsNav = ITEMS_NAV;
  configNav = {
    center: false,
    search: true
  }

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
