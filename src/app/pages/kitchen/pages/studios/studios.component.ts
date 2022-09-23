import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { KitchenProductsService } from 'src/app/services/kitchen-products.service';

import SwiperCore, { SwiperOptions, EffectCoverflow, Autoplay, Pagination }
from 'swiper';
SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.css']
})
export class StudiosComponent implements OnInit {

  url = environment.api
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween:10,
    autoplay:{delay:1500},
  };

  studios:any;
  results:any;

  maps = new Map()

  details:any;

  constructor(private kitchen:KitchenProductsService) {
    this.kitchen.studios().subscribe((data:any)=>{
      console.log(data)
      this.studios = data
      this.results = data
    })
  }

  ngOnInit(): void {
  }

  viewDetails(filter:any){
    this.details = this.studios.filter((studio:any)=>studio.id==filter.id)[0]
    console.log(this.details)
  }

  search(value:string){
    if(!value || value.length<4) {
      this.results = this.studios
      return
    }
    this.results = this.studios.filter((studio:any)=>studio.zipcode ==value)
  }
}

class Map {
  lat = 19.290950;
  lng = -99.653015;
  zoom = 9;
}
