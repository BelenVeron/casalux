import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { KitchenProductsService } from 'src/app/services/kitchen-products.service';

import SwiperCore, { SwiperOptions, EffectCoverflow, Autoplay, Pagination }
from 'swiper';
SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {

  url = environment.api
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween:10,
    autoplay:{delay:1500},
    navigation:true
  };

  filters = {
    display:false,
    items: [
      {id:1, selected:false, name:'INTERIOR DESIGNER'},
      {id:2, selected:false, name:'ARCHITECT'},
      {id:3, selected:false, name:'CARPENTER'},
      {id:4, selected:false, name:'PAINTER'},
    ]
  }
  maps = new Map()
  contact = false;

  experts:any
  results:any

  expert = {
    name:'Alan Scott',
    ocupation:'INTERIOR DESIGNER',
    desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officia dicta optio illum odio.Aliquid eos at impedit hic fugiat iste neque, nisi velit enim.',
    img:'/assets/img/kitchen/media/imggetstarted.png',
    imgs:['/assets/img/kitchen/media/imggetstarted.png','/assets/img/kitchen/media/imggetstarted.png','/assets/img/kitchen/media/imggetstarted.png','/assets/img/kitchen/media/imggetstarted.png']
  }
  details:any;

  contactInfo = {
    name:'',
    surname:'',
    phone:'',
    message:'',
  }
  constructor(private kitchen:KitchenProductsService) {
    this.kitchen.experts().subscribe((data:any)=>{
      console.log(data)
      this.experts = data.experts
      this.results = data.experts
    })
  }

  ngOnInit(): void {
  }

  search(value:string){
    if(!value || value.length<4) {
      this.results = this.experts
      return
    }
    this.results = this.experts.filter((studio:any)=>studio.zipcode ==value)
  }

  viewDetails(expert:any, showContact:boolean){
    let params = 'expertID='+expert.id

    this.contact = showContact
    var goodStars = expert.calification
    expert.stars = []
    for(var i = 0;i<goodStars;i++){
      expert.stars.push(1)
    }
    for(var i = 0;i<(5-expert.stars.length+1);i++){
      expert.stars.push(0)
    }
    this.details = expert
  }

  searchWithFilters(){
    this.filters.display = false
    console.log(this.filters.items)
  }
  close(){
    this.details = null
    this.contact = false
  }

  contactExpert(){
    console.log(this.contactInfo)
  }

}

class Map {
  lat = 19.290950;
  lng = -99.653015;
  zoom = 9;
}