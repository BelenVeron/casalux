import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Closet } from 'src/app/models/closets/closet';
import { Collection } from 'src/app/models/collections/collection';
import { ConfigSwiperHorizontal } from 'src/app/models/config-swiper-horizontal';
import { ClosetsService } from 'src/app/services/closets.service';
import { ITEMS_NAV } from '../closets.data';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  activeSidenav: boolean = false;
  navLeft: boolean = true;
  itemsNav = ITEMS_NAV;
  src: string = '/assets/img/closets/collection-title-closets.png'
  id: string = '';
  closets: Closet[] = [];
  itemsDescription:any = {name: '', description: ''};
  // configuration of horizontal-gallery in the center
  configCollectionClosets: ConfigSwiperHorizontal = {
    items: [],
    class: 'vertical',
    imageClass: 'small',
    typeFavorite: 'heart-icon-closet',
    swiper: {
      spaceBetween: 30,
      pagination: { clickable: true }, 
    }
  };
  configCollectionClosetsUp: ConfigSwiperHorizontal = {
    items: [],
    class: 'horizontal',
    swiper: {
      loopedSlides: 1,
      slidesPerView: 3,
      initialSlide: 0,
      spaceBetween: 10,
      navigation: true,
      centeredSlides:true,
      allowTouchMove: false,
      loop:true, 
    }
  };
  

  constructor(
    private closetsService:ClosetsService, 
    private route:ActivatedRoute,
    public router: Router,
    private changeDetection: ChangeDetectorRef) {

    this.id = route.snapshot.params.collectionId || ''
    this.closetsService.getClosets(this.id).subscribe((data:any)=>{
      this.closets = data;
      console.log(data)
      this.configCollectionClosets.items = this.closets[0].contents;
      this.configCollectionClosetsUp.items = this.getPhotos();
      this.setDescription(0);
      /* if(!this.id || this.id == 'closets'){
        this.imagesSelected = this.closets[0].kitchens[0].photos
        this.changeSelectedCollection(0)
      } */
    });
  } 

  ngOnInit(): void {
  }

  /* 
    For now, set only the first photo of the first model
  */
  getPhotos(): any[] {
    let photos: any[] = [];
    this.closets[0].models.forEach(model => {
      photos.push(model.photos[0])
    });
    return photos;
  }

  setDescription(index: number): void {
    this.itemsDescription.name = this.closets[index].name;
    this.itemsDescription.description = this.closets[index].description;
  }

  redirect(): void {
    this.router.navigate(['/closets/starting-closet', 1])
  }

  openMenu(): void {
    this.activeSidenav = true;
  }

  setSideNav(event: boolean): void {
    this.activeSidenav = event;
  }
  
}
