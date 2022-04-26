import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitchenProductsService } from 'src/app/services/kitchen-products.service';
import { environment } from 'src/environments/environment';
import SwiperCore, { SwiperOptions, EffectCoverflow, Autoplay, Pagination }
from 'swiper';
SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  url = environment.api;
  itemListTitle = {
    title: 'COLLECTIONS',
    text: '',
    name: ''
  }
  mobilePage: string = 'gallery';
  config: SwiperOptions = {
    loopedSlides: 3,
    slidesPerView: 3,
    initialSlide: 0,
    spaceBetween:10,
    navigation: true,
    centeredSlides:true,
    allowTouchMove: false,
    loop:true,
  };
  config2: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween:50,
    mousewheel: true,
    direction:'vertical',
    autoplay:{
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: { clickable: true },
  };
  configMobile: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween:10,
    navigation:true
  };
  seemore = false
  id = '';
  collections:any = []
  viewMobile = false

  detailsImg = [
    {img:'/assets/img/kitchen/media/imggetstarted.png'},
    {img:'/assets/img/kitchen/media/imggetstarted.png'},
    {img:'/assets/img/kitchen/media/imggetstarted.png'},
  ]
  collectionSelected:any = {};
  imagesSelected:any = [];
  innerWidth: number = 0;

  constructor(private collection:KitchenProductsService, private route:ActivatedRoute) {

    this.id = route.snapshot.params.collectionId || ''
    this.collection.collectionInfo(this.id).subscribe((data:any)=>{
      this.collections = data
      console.log(data)
      if(!this.id|| this.id == 'collections'){
        this.imagesSelected = this.collections[0].kitchens[0].photos
        this.changeSelectedCollection(0)
      }else{
        // this.collectionSelected = data.collectionSelected
        // this.collectionSelected.photos = data.collectionSelectedPhotos
        // this.collectionSelected.content = data.collectionSelectedContent
      }
    })

  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  seeMore(){
    this.seemore = !this.seemore
  }

  slideChange(e:any){
    /* const element:any = document.getElementById(this.url+(e.realIndex))
    if(element) element.click(); */
    this.selectImages(e.activeIndex-3)
    console.log("event ", e.activeIndex)
  }

  updateCollection(){
    // let params = 'collectionID='+this.id
    this.collectionSelected = this.collections[this.id];
    this.selectImages(0)
    setTimeout(()=>{
      const element:any = document.getElementById(this.url+0)
      if(element) element.click()
    }, 20)
  }

  changeSelectedCollection(index:any){
    this.id = index
    this.updateCollection()
    this.changePageMobile();
    if (this.seemore) this.seemore = false;
  }

  /**
   * Change the page of the mobile and set the
   * itemListTitle depend of the page
   */
  changePageMobile():void {
    if (this.innerWidth <= 400) {
      if (this.mobilePage === 'index'){
        this.itemListTitle.name = this.collectionSelected.name;
        this.itemListTitle.text = this.collectionSelected.description;
        this.mobilePage = 'gallery'
      } else {
        this.itemListTitle.name = '';
        this.itemListTitle.text = 'Enter the collection you like to see details';
        this.mobilePage = 'index'
      }
    } 
  }

  selectImages(index:number){
  const hasPhotos = this.collections[this.id].kitchens[index].photos.length > 0
  this.imagesSelected = hasPhotos ? this.collections[this.id].kitchens[index].photos : []
 
  /* this.imagesSelected = [];
  this.imagesSelected.push(this.collections[this.id].kitchens[index].photos[0]) */
  console.log("index ",index, " imageselected ", this.imagesSelected)
  }



  goBack(){
    this.changePageMobile();
  }
}
