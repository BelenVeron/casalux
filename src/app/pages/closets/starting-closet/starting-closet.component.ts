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
  closets: any[] = [
    {closet: "walk in closet"},
    {closet: "wardrobe closet"},
    {closet: "walk in + wardrobe"}
    ]
  id: string = '';
  shapes: any[] = [
    {value: "Single wall", color: 'rgba(96, 96, 72)'},
    {value: "Gallery", color: 'rgba(96, 96, 72)'},
    {value: "L shaped", color: 'rgba(96, 96, 72)'},
    {value: "U shaped", color: 'rgba(96, 96, 72)'},
    {value: "Custom", color: 'rgba(96, 96, 72)'},
    {value: "Island", color: 'rgba(96, 96, 72)'}];
  closetTypes: any[] = [
    {image: '../luxurykitchens/img/lk-collectionImg70.jpg'},
    {image: '../luxurykitchens/img/lk-collectionImg70.jpg'},
    {image: '../luxurykitchens/img/lk-collectionImg70.jpg'},
    {image: '../luxurykitchens/img/lk-collectionImg70.jpg'}
  ]
  
  
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

}
