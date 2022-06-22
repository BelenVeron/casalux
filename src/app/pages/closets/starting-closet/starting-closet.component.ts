import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ITEMS_NAV } from '../closets.data';


@Component({
  selector: 'app-starting-closet',
  templateUrl: './starting-closet.component.html',
  styleUrls: ['./starting-closet.component.css']
})
export class StartingClosetComponent implements OnInit {

  src: string = '/assets/img/closets/hero-starting.png'
  srcSteps: string = '/assets/img/closets/step1.png'
  srcForm: string = '/assets/img/closets/form.png'
  activeSidenav: boolean = false;
  navLeft: boolean = true;
  projectModal: boolean = false;
  itemsNav = ITEMS_NAV;
  title: string ="3 Walls: U shaped with island"
  closets: any[] = [];
  id: string = '';
  shapes: any[] = [];
  closetTypes: any[] = [];
  isModuleSelected: boolean = false;
  configNav = {
    center: true,
    username: true,
    search: false,
    title: 'SELECT CLOSET TYPE'
  }
  
  
  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.closetTypes)
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

  selectModuleAndContinue(): void {
    if (this.isModuleSelected) {
      this.router.navigate(['closets/master-closet/1']);
    } else {
      this.isModuleSelected = true;
    }
  }

  openProjectModal(): void {
    this.projectModal = true;
  }
}
