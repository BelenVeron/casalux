import { Component, OnInit } from '@angular/core';
import { ConfigButton } from 'src/app/models/interfaces/config-button';
import { ConfigSwiperHorizontal } from 'src/app/models/interfaces/config-swiper-horizontal';
import { SwiperOptions } from 'swiper';
import { GALLERY_ACCESORIES } from '../../closets.data';

@Component({
  selector: 'app-accesories-cart',
  templateUrl: './accesories-cart.component.html',
  styleUrls: ['./accesories-cart.component.css']
})
export class AccesoriesCartComponent implements OnInit {
  
  navLeft: boolean = true;
  price: number = 240
  config3: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween:5,
    pagination:true,
    effect:'fade'
  };
  quantity = 1;
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
  closets = GALLERY_ACCESORIES
  configGalleryAccesories: ConfigSwiperHorizontal = {
    items: GALLERY_ACCESORIES,
    class: 'vertical adapt-container',
    imageClass: 'small',
    typeFavorite: 'heart-icon-closet'
  };
  configAddButton: ConfigButton = {type:'green-with-icon', icon: 'fas fa-shopping-cart', text:'Add to cart'};



  constructor() { }

  ngOnInit(): void {
  }

  minus(): void {
    if(this.quantity > 0)this.quantity--
  }

  plus(): void {
    this.quantity++
  }

  addCart(): void {

  }
}
