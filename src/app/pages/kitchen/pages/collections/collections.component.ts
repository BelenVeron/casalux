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
    spaceBetween:10,
    autoplay:{delay:1500},
  };
  config2: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween:10,
    direction:'vertical',
    pagination: { clickable: true },
  };
  configMobile: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween:10,
    autoplay:{delay:1500},
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

  constructor(private collection:KitchenProductsService, private route:ActivatedRoute) {

    this.id = route.snapshot.params.collectionId || ''
    this.collection.collectionInfo(this.id).subscribe((data:any)=>{
      this.collections = data.data.collections
      if(!this.id|| this.id == 'collections'){
        this.changeSelectedCollection(data.data.collections[0].collectionID, false)
      }else{
        this.collectionSelected = data.data.collectionSelected
        this.collectionSelected.photos = data.data.collectionSelectedPhotos
        this.collectionSelected.content = data.data.collectionSelectedContent
      }
      console.log(data.data)
    })

  }

  ngOnInit(): void {
  }

  seeMore(){
    this.seemore = !this.seemore
  }


  updateCollection(show:boolean){
    let params = 'collectionID='+this.id
    this.collection.collectionInfo(params).subscribe((data:any)=>{
      this.collectionSelected = data.data.collectionSelected
      this.collectionSelected.photos = data.data.collectionSelectedPhotos
      this.collectionSelected.content = data.data.collectionSelectedContent
    })
    this.viewMobile = show
  }

  changeSelectedCollection(id:any, show:boolean){
    this.id = id
    this.updateCollection(show)
  }
}
