import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISLAND_IMAGES, ITEMS_NAV, WALK_IN_IMAGES, WARDROBE_IMAGES } from '../closets.data';

@Component({
  selector: 'app-index-gallery',
  templateUrl: './index-gallery.component.html',
  styleUrls: ['./index-gallery.component.css']
})
export class IndexGalleryComponent implements OnInit {

  activeSidenav: boolean = false;
  navLeft: boolean = true;
  itemsNav = ITEMS_NAV;
  walkInImages = WALK_IN_IMAGES;
  wardrobeImages = WARDROBE_IMAGES;
  islandImages = ISLAND_IMAGES;
  route: string = '';
  footer: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.route = this.router.url
    this.setFooter();
  }

  setFooter(): void {
    switch (this.router.url) {
      case '/closets/wardrobe':
        this.footer = true;
      break;
      case '/closets/center-island':
        this.footer = true;
      break;
    
      default:
      break;
    }
  }

  openMenu(): void {
    this.activeSidenav = true;
  }

  setSideNav(event: boolean): void {
    this.activeSidenav = event;
  }

}
