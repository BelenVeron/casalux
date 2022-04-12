import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SwiperOptions} from 'swiper';


@Component({
  selector: 'app-horizontal-gallery',
  templateUrl: './horizontal-gallery.component.html',
  styleUrls: ['./horizontal-gallery.component.css'],
})
export class HorizontalGalleryComponent implements OnInit {

  url = environment.api;
  @Input() items: any = [];
  configVertical: SwiperOptions = {
   spaceBetween:30,
    direction:'vertical',
    autoplay:{
      delay: 2000,
      disableOnInteraction: true
    },
    pagination: { clickable: true }, 
  };
  

  constructor() { }

  ngOnInit(): void {
  }


}
