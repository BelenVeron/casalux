import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigSecondaryHeader } from 'src/app/models/interfaces/config-secondary-header';

import { FORM_CHECKLIST, ITEMS_NAV } from '../closets.data';


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
  form = FORM_CHECKLIST;
  title: string ="3 Walls: U shaped with island"
  closets: any[] = [];
  id: string = '';
  shapes: any[] = [];
  closetTypes: any[] = [];
  isModuleSelected: boolean = false;
  steps: boolean[] = [true, false, false, false, false];
  configNav = {
    center: true,
    username: true,
    search: false,
    title: 'SELECT CLOSET TYPE'
  }
  configHeader: ConfigSecondaryHeader = {
    srcLeft: '/assets/img/closets/master-closet.png',
    headerClass: 'container-starting form-page'
  };
  
  
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  setUser(user: string): void {
    this.form.user = user;
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

  continue(): void {
    if (this.isModuleSelected) {
      this.router.navigate(['closets/master-closet/1']);
    } else {
      this.isModuleSelected = true;
      this.typeSelected('/assets/img/closets/form.png');
    }
  }

  openProjectModal(): void {
    this.projectModal = true;
  }

  stepActived(steps: boolean[]) {
    this.steps = steps;
    if (steps[4]) {
      this.continue()
    }
  }
}
