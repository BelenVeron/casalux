import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CLOSET_TYPES, GALLERY_ACCESORIES, ITEMS_NAV } from '../closets.data';

@Component({
  selector: 'app-accesories',
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.css']
})
export class AccesoriesComponent implements OnInit {
  srcForm: string = '/assets/img/closets/dimensions-left-small.png'
  srcSteps: string = '/assets/img/closets/accesories.png'
  activeSidenav: boolean = false;
  galleryAccesories: any[] = GALLERY_ACCESORIES;
  closetTypes: any[] = CLOSET_TYPES;
  configNav = {
    center: true,
    username: true,
    search: false,
    title: 'SELECT CLOSET TYPE'
  }
  navLeft: boolean = true;
  itemsNav = ITEMS_NAV;



  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openMenu(): void {
    this.activeSidenav = true;
  }

  setSideNav(event: boolean): void {
    this.activeSidenav = event;
  }
  typeSelected(data: any){
    this.srcForm = data
  }
  selectClosetAndContinue() : void {
    this.router.navigate(['closets/accesories-cart/1']);
  }

}
