import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigButton } from 'src/app/models/config-button';
import { ITEMS_NAV } from '../closets.data';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  src: string = '/assets/img/closets/dimensions-left-big.png'
  srcSteps: string = '/assets/img/closets/module-steps.png'
  srcForm: string = '/assets/img/closets/dimensions-left-small.png'
  srcImage: string = '/assets/img/closets/module-gallery.png'

  activeSidenav: boolean = false;
  navLeft: boolean = true;
  itemsNav = ITEMS_NAV;
  title: string = "3";
  text1: string = "USSER 1";
  text2: string = "USSER 2";
  configNav = {
    center: true,
    username: true,
    search: false,
    title: 'SELECT CLOSET TYPE'
  }
  dimValue: string = '50';
  isMasterSelected: any;
  configNextButton: ConfigButton = {type:'next-step', text:'NEXT'}
  configUser1Button: ConfigButton = {type:"users", text:"USER 1"}
  configUser2Button: ConfigButton = {type:"users", text:"USER 2"}
  

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
    this.router.navigate(['closets/accesories/1']); 
  }

}
