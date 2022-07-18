import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigButton } from 'src/app/models/interfaces/config-button';
import { ConfigSecondaryHeader } from 'src/app/models/interfaces/config-secondary-header';
import { CHECKS, ITEMS_NAV } from '../closets.data';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  srcImage: string = '/assets/img/closets/module-gallery.png'
  activeSidenav: boolean = false;
  navLeft: boolean = true;
  itemsNav = ITEMS_NAV;
  configNav = {
    center: true,
    username: true,
    search: false,
    title: 'SELECT CLOSET TYPE'
  }
  configNextButton: ConfigButton = {type:'next-step', text:'NEXT'}
  configUser1Button: ConfigButton = {type:"users", text:"USER 1"}
  configUser2Button: ConfigButton = {type:"users", text:"USER 2"}
  configHeader: ConfigSecondaryHeader = {
    title: 'MASTER BED ROOM CLOSETS',
    description: 'Champagne color Uprights, anchoring to Wall, 101-3/8°. Oak flamed color Shelves. Oak flarned color Open Units. Zinc color Drawers. Champagne color Rails. Standard dimensions 35° width.',
    headerClass: 'container-starting text-small'
  };

  checks: any = CHECKS;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  openMenu(): void {
    this.activeSidenav = true;
  }

  setSideNav(event: boolean): void {
    this.activeSidenav = event;
  }

  selectClosetAndContinue() : void {
    this.router.navigate(['closets/accesories/1']); 
  }

  selectCheck(i: number): void {
    
  }

}
