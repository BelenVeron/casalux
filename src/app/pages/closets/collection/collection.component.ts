import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collection } from 'src/app/models/collections/collection';
import { KitchenProductsService } from 'src/app/services/kitchen-products.service';
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
  collections: Collection[] = [];

  constructor(
    private collectionService:KitchenProductsService, 
    private route:ActivatedRoute,
    private changeDetection: ChangeDetectorRef) {

    this.id = route.snapshot.params.collectionId || ''
    this.collectionService.collectionInfo(this.id).subscribe((data:any)=>{
      this.collections = data;
      /* if(!this.id || this.id == 'collections'){
        this.imagesSelected = this.collections[0].kitchens[0].photos
        this.changeSelectedCollection(0)
      } */
    });
  } 

  ngOnInit(): void {
  }

  openMenu(): void {
    this.activeSidenav = true;
  }

  setSideNav(event: boolean): void {
    this.activeSidenav = event;
  }
  
}
