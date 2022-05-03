import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-description',
  templateUrl: './vertical-description.component.html',
  styleUrls: ['./vertical-description.component.css']
})


export class VerticalDescriptionComponent implements OnInit {
  collectionSelected:any = {};
  imagesSelected:any = [];
  innerWidth: number = 0;

  seemore = false
  id = '';
  collections:any = []
  viewMobile = false

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  seeMore(){
    this.seemore = !this.seemore
  }

  slideChange(e:any){
    this.selectImages(e.activeIndex-3)
  }

  updateCollection(){
    // let params = 'collectionID='+this.id
    /* this.collectionSelected = this.collections[this.id];
    this.selectImages(0); */
  }

  changeSelectedCollection(index:any){
   /*  this.id = index
    this.updateCollection()
    this.changePageMobile();
    if (this.seemore) this.seemore = false; */
  }

  /**
   * Change the page of the mobile and set the
   * itemListTitle depend of the page
   */
  changePageMobile():void {
    /* if (this.innerWidth <= 400) {
      if (this.mobilePage === 'index'){
        this.itemListTitle.name = this.collectionSelected.name;
        this.itemListTitle.text = this.collectionSelected.description;
        this.mobilePage = 'gallery'
      } else {
        this.itemListTitle.name = '';
        this.itemListTitle.text = 'Enter the collection you like to see details';
        this.mobilePage = 'index'
      }
    }  */
  }

  selectImages(index:number){
   /*  const hasPhotos = this.collections[this.id].kitchens[index].photos.length > 0
    if(hasPhotos){
      this.imagesSelected = [];
      this.collections[this.id].kitchens[index].photos.forEach((element: any) => {
        this.imagesSelected.push(element);
      });
      this.changeDetection.detectChanges();
    } */
  }

  goBack(){
    this.changePageMobile();
  }

}
