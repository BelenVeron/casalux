import { Component, OnInit } from '@angular/core';
import { KitchenProductsService } from 'src/app/services/kitchen-products.service';
import { environment } from 'src/environments/environment';

import SwiperCore, { SwiperOptions, EffectCoverflow, Autoplay }
from 'swiper';
SwiperCore.use([EffectCoverflow, Autoplay]);

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 5,
    navigation:true,
    spaceBetween:2
  };
  config2: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween:5,
    navigation:true,
  };

  url  =environment.api
  subCategorys:any = []
  quantity = 1

  filters:any = [
    // {name:'BASE UNITS', selected:true, subCategorys:this.optionsBaseUnits},
    // {name:'TALL UNITS', selected:false, subCategorys:this.optionTallUnits},
    // {name:'WALL UNITS', selected:false, subCategorys:this.optionsBaseUnits},
    // {name:'BACKSPLASH', selected:false, subCategorys:this.optionTallUnits},
    // {name:'COUNTERTOPS', selected:false, subCategorys:this.optionsBaseUnits},
    // {name:'SHELVES', selected:false, subCategorys:this.optionTallUnits},
  ]
  activeFilter = ''
  additional = new Additional()
  info = {
    details: true,
    technical: false,
  }
  selected = {
    type:'',
    size:'',
    color:''
  }
  constructor(private kitchen:KitchenProductsService) {
    this.kitchen.additionals().subscribe((data:any)=>{
      console.log(data)
      var selected = data.data.additionalSelected[0]
      this.additional = selected

      this.selected.type = this.additional.additionalTypes[0].id
      this.selected.size = this.additional.additionalSizes[0].id
      this.selected.color = this.additional.additionalSizes[0].id

      console.log(this.selected)
      this.filters = data.data.categorys
      this.subCategorys = data.data.subcategoryAdditionals

      this.additional.additionalColors.map((color:any)=>color.selected = false)
      this.additional.additionalColors[0].selected  =true
      console.log(this.additional.additionalColors)
      this.additional.price = data.data.additionalPrice
      this.filters.map((filter:any)=>filter.selected = false)
    })
  }

  ngOnInit(): void {
  }

  selectFilter(filter:any, show:boolean){
    this.filters.map((filter:any)=>filter.selected = false)
    filter.selected = show
  }

  applySubcategory(filter:any){
    this.activeFilter = filter
    var params = 'additionalSubcategoryID='+filter.id

    this.kitchen.additionals(params).subscribe((data:any)=>{
      console.log(data)

      this.subCategorys = data.data.subcategoryAdditionals

    })
  }

  applyAdditional(id:any){
    var params = 'additionalID='+id

    this.kitchen.additionals(params).subscribe((data:any)=>{
      console.log(data)

      var selected = data.data.additionalSelected[0]
      this.additional = selected
      this.additional.price = data.data.additionalPrice

    })
  }

  selectColor(color:any){
    this.additional.additionalColors.map((color:any)=>color.selected = false)
    color.selected = true
  }

  updateColor(color:any){
    this.selected.color = color.name
    this.updatePrice()
  }
  updatePrice(){
    const { type, size, color } = this.selected
    let params = `additionalTypeID=${type}&additionalSizeID=${size}&addiitonalColorID=${color}`

    this.kitchen.additionals(params).subscribe((data:any)=>{
      console.log(data)
      this.additional.price = data.data.additionalPrice
    })
  }

}


class Additional {
  id:string = '';
  name:string = '';
  image:string = '';
  details:string = '';
  technicalInfo:string = '';
  price:number = 0;
  additionalTypes:any = [];
  additionalSizes:any = [];
  additionalColors:any = []
}