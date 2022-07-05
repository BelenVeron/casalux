import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Closet } from 'src/app/models/closets/closet';
import { Collection } from 'src/app/models/collections/collection';
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
  configCollectionClosets: any = {
    items: [],
    class: 'vertical',
    imageClass: 'small',
    typeFavorite: 'heart-icon-closet',
    swiper: {
      spaceBetween: 30,
      pagination: { clickable: true }, 
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
      this.configCollectionClosets.items = this.closets[0].contents;
      this.setDescription(0);
      /* if(!this.id || this.id == 'closets'){
        this.imagesSelected = this.closets[0].kitchens[0].photos
        this.changeSelectedCollection(0)
      } */
    });
  } 

  ngOnInit(): void {
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
