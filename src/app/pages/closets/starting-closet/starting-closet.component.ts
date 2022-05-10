import { Component, OnInit } from '@angular/core';
import { ITEMS_NAV } from '../closets.data';

@Component({
  selector: 'app-starting-closet',
  templateUrl: './starting-closet.component.html',
  styleUrls: ['./starting-closet.component.css']
})
export class StartingClosetComponent implements OnInit {

  src: string = '/assets/img/closets/hero-starting.png'
  srcSteps: string = '/assets/img/closets/step1.png'
  srcNoImage: string = '/assets/img/closets/no-image.png'
  activeSidenav: boolean = false;
  navLeft: boolean = true;
  itemsNav = ITEMS_NAV;
  id: string = '';
  formas: string[] = ["single wall", " Gallery ", " L shaped ", " U shaped ", " Custom ", "  Island "];

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
