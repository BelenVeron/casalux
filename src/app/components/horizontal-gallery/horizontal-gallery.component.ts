import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfigSwiperHorizontal } from 'src/app/models/config-swiper-horizontal';
import { environment } from 'src/environments/environment';
import SwiperCore, { SwiperOptions, EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper';
SwiperCore.use([EffectCoverflow, Autoplay, Pagination, Navigation]);





@Component({
  selector: 'app-horizontal-gallery',
  templateUrl: './horizontal-gallery.component.html',
  styleUrls: ['./horizontal-gallery.component.css'],
})
export class HorizontalGalleryComponent implements OnInit {

  url = environment.api;
  /* 
    config = {

      // class of the swiper
      class: string;

      // config of the swiper
      swiper: SwiperOptions

      // class of the image
      imageClass: string

      // items to repeat in the ngFor in the image
      // can be .src (in the assets) or .image (external with url)
      items: []

      // type of favorite in app-favorite
      typeFavorite: string

      // title in h3
      text: string
      
      // description in p
      description: string
    }
  */
  @Input() config!: ConfigSwiperHorizontal;
  // event that send the url of the image selected
  @Output() sendImageUrl: EventEmitter<string> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  sendImage(url: string): void{
    this.sendImageUrl.emit(url);
  }

}
