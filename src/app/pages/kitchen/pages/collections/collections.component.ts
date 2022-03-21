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
    slidesPerView: 3,
    spaceBetween:60,
    navigation: true,
    centeredSlides:true,
    allowTouchMove: false,
    loop:true
  };
  config2: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween:50,
    direction:'vertical',
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
        this.changeSelectedCollection(0, false)
        this.imagesSelected = this.collections[0].kitchens[0].photos
      }else{
        // this.collectionSelected = data.collectionSelected
        // this.collectionSelected.photos = data.collectionSelectedPhotos
        // this.collectionSelected.content = data.collectionSelectedContent
      }
      console.log(data.data)
    })

  }

  ngOnInit(): void {
  }

  seeMore(){
    this.seemore = !this.seemore
  }

  slideChange(e:any){
    const index = e.realIndex-1
    this.imagesSelected = this.collections[this.id].kitchens[index].photos
    console.log(this.imagesSelected)
  }

  updateCollection(show:boolean){
    // let params = 'collectionID='+this.id
    this.collectionSelected = this.collections[this.id]
    this.imagesSelected = this.collections[this.id].kitchens[0].photos
    this.viewMobile = show

  }

  changeSelectedCollection(index:any, show:boolean){
    this.id = index
    this.updateCollection(show)
  }

  selectImages(index:number){
    this.imagesSelected = this.collections[this.id].kitchens[index].photos
  }
}
