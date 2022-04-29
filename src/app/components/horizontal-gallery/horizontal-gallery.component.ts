import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CONFIG_HORIZONTAL, CONFIG_VERTICAL } from './horizontal-gallery-data';
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
  @Input() horizontal: boolean = false;
  @Input() vertical: boolean = false;
  configVertical: SwiperOptions = CONFIG_VERTICAL;
  configHorizontal: SwiperOptions = CONFIG_HORIZONTAL;
  

  constructor() { }

  ngOnInit(): void {
  }


}
