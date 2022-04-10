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

  url = environment.api
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

  constructor(private collection:KitchenProductsService, private route:ActivatedRoute) {

    this.id = route.snapshot.params.collectionId || ''
    this.collection.collectionInfo(this.id).subscribe((data:any)=>{
      this.collections = data
      console.log(data)
      if(!this.id|| this.id == 'collections'){
        this.imagesSelected = this.collections[0].kitchens[0].photos
        this.changeSelectedCollection(0, false)
      }else{
        // this.collectionSelected = data.collectionSelected
        // this.collectionSelected.photos = data.collectionSelectedPhotos
        // this.collectionSelected.content = data.collectionSelectedContent
      }
    })

  }

  ngOnInit(): void {
  }

  seeMore(){
    this.seemore = !this.seemore
  }

  slideChange(e:any){
    const element:any = document.getElementById(this.url+(e.realIndex))
    if(element) element.click()
  }

  updateCollection(show:boolean){
    // let params = 'collectionID='+this.id
    this.collectionSelected = this.collections[this.id]
    this.selectImages(0)
    setTimeout(()=>{
      const element:any = document.getElementById(this.url+0)
      if(element) element.click()
    }, 20)
    this.viewMobile = show

  }

  changeSelectedCollection(index:any, show:boolean){
    console.log(index)
    this.id = index
    this.updateCollection(show)
  }

  selectImages(index:number){
    const hasPhotos = this.collections[this.id].kitchens[index].photos.length > 0
    this.imagesSelected = hasPhotos ? this.collections[this.id].kitchens[index].photos : []
  }
}
