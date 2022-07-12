import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigSecondaryHeader } from 'src/app/models/interfaces/config-secondary-header';
import { ConfigSwiperHorizontal } from 'src/app/models/interfaces/config-swiper-horizontal';
import { SwiperOptions } from 'swiper';
import { GALLERY_ACCESORIES, ITEMS_NAV } from '../closets.data';

@Component({
  selector: 'app-accesories-cart',
  templateUrl: './accesories-cart.component.html',
  styleUrls: ['./accesories-cart.component.css']
})
export class AccesoriesCartComponent implements OnInit {
  activeSidenav: boolean = false;
  itemsNav = ITEMS_NAV;
  navLeft: boolean = true;
  srcForm: string = '/assets/img/closets/dimensions-left-small.png';
  configNav = {
    center: true,
    username: true,
    search: false,
    title: 'SELECT CLOSET TYPE'
  }

  config3: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween:5,
    pagination:true,
    effect:'fade'
  };
  quantity = 1;
  additionalPrice: string = "";
  image: string = '/assets/img/closets/accesories.png';
  

  info = {
    details: {
      show: true,
      text: 'Lorem ipsum dolor sit amet, tempor incididunt ut labore et dolore magna aliqua.',
    },
    technicalInfo: {
      show: false,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  }

  configHeader: ConfigSecondaryHeader = {
    title: 'MASTER BED ROOM CLOSETS',
    description: 'Champagne color Uprights, anchoring to Wall, 101-3/8°. Oak flamed color Shelves. Oak flarned color Open Units. Zinc color Drawers. Champagne color Rails.',
    srcRight: '/assets/img/closets/accesories.png',
    headerClass: 'container-starting'
  };

  closets = GALLERY_ACCESORIES
  configGalleryAccesories: ConfigSwiperHorizontal = {
    items: GALLERY_ACCESORIES,
    class: 'vertical adapt-container',
    imageClass: 'small',
    typeFavorite: 'heart-icon-closet'
  };


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
    this.router.navigate(['closets/module/1']);
  }

  sumAdditionalPrice(): string{
    let price = parseInt(this.additionalPrice)*this.quantity;
    return price.toString()+'.00';
  }

  minus(): void {
    if(this.quantity > 0)this.quantity--
  }

  plus(): void {
    this.quantity++
  }
}
