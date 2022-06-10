import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CONFIG_HORIZONTAL, CONFIG_HORIZONTAL_MINI, CONFIG_VERTICAL } from './horizontal-gallery-data';
import SwiperCore, { SwiperOptions, EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper';
SwiperCore.use([EffectCoverflow, Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-horizontal-gallery',
  templateUrl: './horizontal-gallery.component.html',
  styleUrls: ['./horizontal-gallery.component.css'],
})
export class HorizontalGalleryComponent implements OnInit {

  url = environment.api;
  @Input() items: any = [];
  @Input() type: string = '';
  @Input() assets: boolean = false;
  @Input() typeFavorite: string = "";
  configVertical: SwiperOptions = CONFIG_VERTICAL;
  configHorizontal: SwiperOptions = CONFIG_HORIZONTAL;
  configHorizontalMini: SwiperOptions = CONFIG_HORIZONTAL_MINI;
  @Output() sendImageUrl: EventEmitter<string> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  sendImage(url: string): void{
    console.log(url)
    this.sendImageUrl.emit(url);
  }

}
