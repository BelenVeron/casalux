import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigButton } from 'src/app/models/interfaces/config-button';
import { ConfigSecondaryHeader } from 'src/app/models/interfaces/config-secondary-header';
import { ITEMS_NAV } from '../closets.data';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {
  src: string = '/assets/img/closets/dimensions-left-big.png'
  srcSteps: string = '/assets/img/closets/dimensions-steps.png'
  srcForm: string = '/assets/img/closets/dimensions-left-small.png'
  activeSidenav: boolean = false;
  navLeft: boolean = true;
  configButton = {
    type: "next-step",
    text: "NEXT"
  }
  
  itemsNav = ITEMS_NAV;
  title: string ="3";
  configNav = {
    center: true,
    username: true,
    search: false,
    title: 'SELECT CLOSET TYPE'
  }
  dimValue: string = '50';
  isMasterSelected: any;
  configNext: ConfigButton = {type:'next-step', text:'NEXT'}
  configHeader: ConfigSecondaryHeader = {
    title: 'MASTER BED ROOM CLOSETS',
    description: 'Champagne color Uprights, anchoring to Wall, 101-3/8°. Oak flamed color Shelves. Oak flarned color Open Units. Zinc color Drawers. Champagne color Rails. Standard dimensions 35° width.',
    headerClass: 'container-starting '
  };


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openMenu(): void {
    this.activeSidenav = true;
  }

  setSideNav(event: boolean): void {
    this.activeSidenav = event;
  }
  typeSelected(data: any){
    this.srcForm = data
  }

  setRange(value: string): void {
    this.dimValue = value;
  }

  selectClosetAndContinue() : void {
    this.router.navigate(['closets/module/1']);
  }
  
}
