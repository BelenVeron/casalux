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
  title: string ="2 Walls: Closets gallery"
  closets: any[] = [];
  id: string = '';
  shapes: any[] = [];
  closetTypes: any[] = [];
  router: any;
  isModuleSelected: boolean = false;
  
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.closetTypes)
  }

  openMenu(): void {
    this.activeSidenav = true;
  }

  setSideNav(event: boolean): void {
    this.activeSidenav = event;
  }
  typeSelected(data: any){
    this.srcNoImage = data
  }

  selectModuleAndContinue(): void {
    this.isModuleSelected = true;
  }
}
