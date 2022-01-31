import { Component, OnInit } from '@angular/core';
import { KitchenProductsService } from 'src/app/services/kitchen-products.service';
import { environment } from 'src/environments/environment';

import SwiperCore, { SwiperOptions,  Autoplay, Pagination, Grid, Navigation }
from 'swiper';
SwiperCore.use([ Autoplay, Pagination, Grid, Navigation]);

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit {

  config: SwiperOptions = {
    spaceBetween:10,
    navigation:true,
    slidesPerView:4,
    grid:{rows:2, fill:'row'}
  };
  
  openings:any = []
  filters:any = []
  url = environment.api
  images = ['', '','', '','', '','', '','', '','', '','', '','', '','', '',]

  constructor(private kitchen: KitchenProductsService) {
    this.kitchen.opening().subscribe((data:any)=>{
      console.log(data)
      this.filters = data.data.openingCategorys
      this.filters.map((cat:any)=>cat.selected = false)
      this.filters[0].selected = true
      this.openings = data.data.openings

    })
  }

  ngOnInit(): void {
  }

  selectFilter(filter:any, show:boolean){
    this.filters.map((filter:any)=>filter.selected = false)
    filter.selected = show

    console.log(filter.id)
    let params = 'openingCategoryID='+filter.id
    this.kitchen.opening(params).subscribe((data:any)=>{
      console.log(data)
      this.openings = data.data.openings
    })
  }
}
