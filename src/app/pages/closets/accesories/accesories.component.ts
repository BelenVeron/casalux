import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigSwiperHorizontal } from 'src/app/models/config-swiper-horizontal';
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
  closetTypes: any[] = CLOSET_TYPES;
  configNav = {
    center: true,
    username: true,
    search: false,
    title: 'SELECT CLOSET TYPE'
  }
  navLeft: boolean = true;
  itemsNav = ITEMS_NAV;
  configAccesoriesGallery: ConfigSwiperHorizontal = {
    class: 'horizontal-accesories',
    swiper: {
      loopedSlides: 1,
      slidesPerView: 6,
      initialSlide: 0,
      spaceBetween: 10,
      navigation: true,
      centeredSlides:true,
      allowTouchMove: false,
      loop:true,
    },
    items: GALLERY_ACCESORIES,
    description: 'Lorem ipsum dolor.'
  }



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
