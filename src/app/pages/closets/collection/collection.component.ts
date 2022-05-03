import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Closet } from 'src/app/models/closets/closet';
import { Collection } from 'src/app/models/collections/collection';
import { ClosetsService } from 'src/app/services/closets.service';
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
  closets: Closet[] = [];

  constructor(
    private closetsService:ClosetsService, 
    private route:ActivatedRoute,
    private changeDetection: ChangeDetectorRef) {

    this.id = route.snapshot.params.collectionId || ''
    this.closetsService.getClosets(this.id).subscribe((data:any)=>{
      this.closets = data;
      
      /* if(!this.id || this.id == 'closets'){
        this.imagesSelected = this.closets[0].kitchens[0].photos
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
