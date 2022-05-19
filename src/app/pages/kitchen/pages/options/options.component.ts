import { Component, OnInit } from '@angular/core';
import { Additional } from 'src/app/models/options/additional';
import { DataOptions } from 'src/app/models/options/data-options';
import { KitchenProductsService } from 'src/app/services/kitchen-products.service';
import { environment } from 'src/environments/environment';

import SwiperCore, { SwiperOptions, EffectCoverflow, Autoplay, EffectFade }
from 'swiper';
SwiperCore.use([EffectCoverflow, Autoplay, EffectFade]);

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
  config3: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween:5,
    pagination:true,
    effect:'fade'
  };

  url  =environment.api
  urlNoImage = 'https://proxising.com/casalux/img/noimage.png';
  subCategorys:any = []

  filters:any = [
   /*  {name:'BASE UNITS', selected:true, subCategorys:this.optionsBaseUnits},
    {name:'TALL UNITS', selected:false, subCategorys:this.optionTallUnits},
    {name:'WALL UNITS', selected:false, subCategorys:this.optionsBaseUnits},
    {name:'BACKSPLASH', selected:false, subCategorys:this.optionTallUnits},
    {name:'COUNTERTOPS', selected:false, subCategorys:this.optionsBaseUnits},
    {name:'SHELVES', selected:false, subCategorys:this.optionTallUnits}, */
  ]
  activeFilter = ''
  
  
  selected = {
    type:'',
    size:'',
    color:''
  }


  
  /* All we receive from the api */
  additional!: Additional;
  /* Head  */
  info = {
    details: {
      show: true,
      text: '',
    },
    technicalInfo: {
      show: false,
      text: '',
    }
  }

  dataOptions!: DataOptions;

  /* Object of additionalTypes inside of additionalSelected
     with id, name and additionalSizes
  */
  additionalTypes: any[] = []

  /* This additionalSize is an array in the additionalTypes
     change when select another additionalTypes
     Content id, name and additionalColors
  */
  additionalSizes: any[] = []
  /* count the number of items */
  quantity = 1
  additionalPrice: string = "";

  additionalColors: any[] = [];
  /* colorImage: string =""; */
  /* array additionalImages inside of additionalColors 
     big images
  */
  additionalImages: any[] = [];
  /* Show image in the gallery */
  subcategoryAdditional: any[] = [];

  constructor(private kitchen:KitchenProductsService) {
    // this.kitchen.additionals().subscribe((data:any)=>{
    this.kitchen.additionals().subscribe((data:any)=>{
      this.dataOptions = data.data;
      console.log('data option:', this.dataOptions);

      this.setSelected();
      //this.setInfo();
      this.setAdditionalTypes();
      this.setAdditionalSizes(this.additionalTypes[0].name); 
      this.additionalPrice = this.dataOptions.additionalPrice; 

      /* is gonna be changing depend of the additionalTypes selected but
         now is the only one with images
      */
      this.additionalImages = this.dataOptions.additionalImages;
      console.log('additional images',this.additionalImages)
      this.subcategoryAdditional = this.dataOptions.subcategoryAdditionals;
      this.additionalColors = this.dataOptions.additionalColors

      this.filters = this.dataOptions.categorys;

      //this.additional.data.additionalColors.map((color:any)=>color.selected = false)
      /* this.additional.additionalColors[0].selected  = true */
      this.filters.map((filter:any)=>filter.selected = false)
    })
  }

  ngOnInit(): void {
  }

  /* Set the selected property */
  setSelected(): void {
    this.selected.type = this.dataOptions.additionalTypeID.toString();
    this.selected.size = this.dataOptions.additionalSizeID.toString();
    this.selected.color = this.dataOptions.additionalColorID.toString();
  }

  /* Set info details and technical */
  setInfo(): void {
    this.info.details.text = this.additional.data.additionalSelected[0].details;
    this.info.technicalInfo.text = this.additional.data.additionalSelected[0].technicalInfo;
  }

  /* Set additionalTypes, for now only the first element because there is
     not any other
  */
  setAdditionalTypes(): void {
    this.additionalTypes = [];
    this.dataOptions.additionalTypes.map(item =>{
      this.additionalTypes.push(item);
    })
  }

  /* Set additionalSizes depend of the id of additionalTypes selected
     must completed the button function
  */
  setAdditionalSizes(id: string): void {
    this.additionalSizes = [];
    this.dataOptions.additionalSizes.map(item =>{
      this.additionalSizes.push(item);
    /*   if (id === item.id) {
        item.additionalSizes.map((size: any) => {
          this.additionalSizes.push(size);
        })
      } */
    })
    
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
      this.additionalPrice = this.dataOptions.additionalPrice

    })
  }

  selectColor(color:any){
    //this.additional.additionalColors.map((color:any)=>color.selected = false)
    color.selected = true
  }

  updateColor(color:any){
    this.selected.color = color.name
    this.updatePrice()
  }
  updatePrice(){
    const { type, size, color } = this.selected
    let params = `additionalType=${type}&additionalSize=${size}&addiitonalColor=${color}`
    

    this.kitchen.additionals(params).subscribe((data:any)=>{
      this.additionalPrice = this.dataOptions.additionalPrice
    })
  }

 
  sumAdditionalPrice(): string{
    let price = parseInt(this.additionalPrice)*this.quantity;
    return price.toString()+'.00';

  }
}
