import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  projectModal: boolean = false;
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
