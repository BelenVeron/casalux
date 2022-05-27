import { Component, OnInit } from '@angular/core';
import { FinishCollection } from 'src/app/models/finishes/finish-collection';
import { FinishData } from 'src/app/models/finishes/finish-data';
import { KitchenProductsService } from 'src/app/services/kitchen-products.service';
import { environment } from 'src/environments/environment';
import SwiperCore, { SwiperOptions,  Autoplay, Pagination, Grid, Navigation } from 'swiper';
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
  configMobile: SwiperOptions = {
    spaceBetween:1,
    navigation:true,
    slidesPerView:1,
    grid:{fill:'column'}
  };

  optionsByColor:any = []
  optionsByCat:any = []
  mobilePage: string = 'index';
  itemListTitle = {
    title: 'COLLECTIONS',
    text: '',
    name: ''
  }
  collections:any = []
  collectionSelected:any = {};

  filters = [
    {title:'BY COLOR', selected:true, filters:this.optionsByColor},
    {title:'BY CATEGORY', selected:false, filters:this.optionsByCat},
  ]
  finishSelected:any;
  filterSelected = ''
  activeFilters:any = []

  /* All the api*/
 dataFinish!: FinishData;
 finishCollection: FinishCollection | null = null;

  url = environment.api
  info = {
    type:'',
    size:''
  }
  mobileFilter:any = {};
  innerWidth: number = 0;

  constructor(private kitchenService:KitchenProductsService) {
    this.kitchenService.finishesData('').subscribe((data:any)=>{
      console.log(data)
      data.data.finishColors.map((filter:any)=>filter.selected = false)
      data.data.finishCategorys.map((filter:any)=>filter.selected = false)
      
      this.filters[0].filters = data.data.finishColors
      this.filters[1].filters = data.data.finishCategorys
      this.filters[0].filters.map((filter:any)=>filter.type = 'color')
      this.filters[0].filters[0].selected = true
      
      
      this.activeFilters = data.data.selected
      this.mobileFilter = this.activeFilters[0];
      this.dataFinish = data.data;
      console.log(this.dataFinish);
    })
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  /**
   * Change the page of the mobile and set the
   * itemListTitle depend of the page
   */
   changePageMobile():void {
    if (this.innerWidth <= 400) {
      if (this.mobilePage === 'index'){
        this.mobilePage = 'palettes'
      } else if (this.mobilePage === 'palettes'){
        this.mobilePage = 'gallery'
      }
    } 
  }
  
  goBack(){
        this.mobilePage = 'index'
    
  }

  selectFilter(filter:any, show:boolean){
    this.filters.map((filter:any)=>filter.selected = false)
    filter.selected = show
  }

  /* Reset all the filter.selected only if the button
     clicked is not selected, and then asign true the
     filter button selected
  */
  selectFilterMobile(index: number): void {
    if (!this.filters[index].selected) {
      this.filters.forEach(filter => {
        if (filter.selected) {
          filter.selected = false;
        }
      });
    }
    this.filters[index].selected = true;
  }

  /* The palette selected and the index of the activeFilters
     using the index to get the id, and then the array of 
     selected with mapSelected()
  */
  selectPalettes(palette:any, index:number){
    this.kitchenService.getFinishCollections(palette.id).subscribe((data:any)=>{
      this.finishCollection = this.getFinishCollectionFromPhp(data)
    })
    this.changePageMobile();
  }

  getFinishCollectionFromPhp(data: any): FinishCollection {
    let after = data.slice(data.indexOf('{'));
    let obj = JSON.parse(after);
    return obj.data.finish[0];
  }

  /* Return the array of selected to show in swiper
     if there is any selected return null
  */
  mapSelected(id: string): any {
    let selected = null;
    if (this.dataFinish !== undefined) {
      this.dataFinish.selected.forEach(element => {
        if (element.id === id) {
          selected = element;
        }
      });
    }
    return selected;
  }


  applyFilter(filter:any){
    let params = filter.type == 'color'?'finishColorID='+filter.id:'finishCategoryID='+filter.id
    console.log(params)
    this.kitchenService.finishesData(params).subscribe((data:any)=>{
      this.filterSelected = filter.name
      this.activeFilters = data.data.selected
      this.mobileFilter = this.activeFilters.filter((active:any)=>active.name == this.filterSelected)[0]
      this.finishSelected = null

      this.filters[0].filters.map((filter:any)=>filter.selected = false)
      this.filters[1].filters.map((filter:any)=>filter.selected = false)
      filter.selected = true
    })

    this.changePageMobile();
  }

  slide(number:number){
    var filter;
    filter = this.activeFilters[1+number]
    this.applyFilter(filter)
  }
}
