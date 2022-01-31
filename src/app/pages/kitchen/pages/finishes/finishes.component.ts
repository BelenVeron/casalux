import { Component, OnInit } from '@angular/core';
import { KitchenProductsService } from 'src/app/services/kitchen-products.service';
import { environment } from 'src/environments/environment';
import SwiperCore, { SwiperOptions,  Autoplay, Pagination, Grid, Navigation }
from 'swiper';
SwiperCore.use([ Autoplay, Pagination, Grid, Navigation]);


@Component({
  selector: 'app-finishes',
  templateUrl: './finishes.component.html',
  styleUrls: ['./finishes.component.css']
})
export class FinishesComponent implements OnInit {
  config: SwiperOptions = {
    spaceBetween:5,
    navigation:true,
    slidesPerView:3,
    grid:{rows:2, fill:'row'}
  };

  optionsByColor:any = []
  optionsByCat:any = []

  filters = [
    {title:'BY COLOR', selected:false, filters:this.optionsByColor},
    {title:'BY CATEGORY', selected:false, filters:this.optionsByCat},
  ]
  finishSelected:any;
  filterSelected = ''
  activeFilters:any = []

  url = environment.api
  info = {
    type:'',
    size:''
  }
  mobileFilter:any = {}

  constructor(private kitchen:KitchenProductsService) {
    this.kitchen.finishesData('').subscribe((data:any)=>{
      console.log(data.data)
      data.data.finishColors.map((filter:any)=>filter.selected = false)
      data.data.finishCategorys.map((filter:any)=>filter.selected = false)

      this.filters[0].filters = data.data.finishColors
      this.filters[1].filters = data.data.finishCategorys
      
      this.filters[0].filters.map((filter:any)=>filter.type = 'color')

      console.log(this.filters)

      this.activeFilters = data.data.finishPalettes
      this.mobileFilter = this.activeFilters[0]
      console.log(this.mobileFilter.name)
    })
  }

  ngOnInit(): void {
  }

  selectFilter(filter:any, show:boolean){
    this.filters.map((filter:any)=>filter.selected = false)
    filter.selected = show
  }

  selectPalettes(palette:any){
    let params = 'finishID='+palette.id 

    this.kitchen.finishesData(params).subscribe((data:any)=>{
      console.log(data.data)
      this.finishSelected = {
        collections: data.data.finishCollections,
        name: palette.name,
        code: palette.code,
      }
    })
  }


  applyFilter(filter:any, type:string){
    let params = type == 'color'?'finishColorID='+filter.id:'finishCategoryID='+filter.id
    
    console.log(params)
    this.kitchen.finishesData(params).subscribe((data:any)=>{
      this.filterSelected = filter.name
      console.log(data.data)
      this.activeFilters = data.data.finishPalettes
      this.mobileFilter = this.activeFilters.filter((active:any)=>active.name == this.filterSelected)[0]
      this.finishSelected = null

      this.filters[0].filters.map((filter:any)=>filter.selected = false)
      this.filters[1].filters.map((filter:any)=>filter.selected = false)
      filter.selected = true
    })
  }
}
