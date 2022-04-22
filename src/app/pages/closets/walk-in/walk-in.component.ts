import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walk-in',
  templateUrl: './walk-in.component.html',
  styleUrls: ['./walk-in.component.css']
})
export class WalkInComponent implements OnInit {

  activeSidenav: boolean = false;
  items = [
    {title:'WARDROVE CLOSETS', route:'/closets', selected:false},
    {title:'WALK-IN-CLOSETS', route:'/closets/walk-in', selected:false},
    {title:'CENTER ISLAND', route:'/closets', selected:false},
    {title:'ACCESORIES', route:'/closets', selected:false},
    {title:'FINISHES', route:'/closets', selected:false},
  ]
  secondItems = [
    {title:'QUALITY', route:'/closets', selected:false},
    {title:'STUDIOS', route:'/closets', selected:false},
    {title:'VISUALIZER', route:'/closets', selected:false},
    {title:'ASK QUESTIONS', route:'/closets', selected:false},
    {title:'EXPERTS & PROJECTS', route:'/closets', selected:false},
  ]
  actions = [
    {title:'Download catalog', icon:'download', route:'/closets/start'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  activeMenu() {
    this.activeSidenav = !this.activeSidenav;
  }

  closeMenu():void {
    if (this.activeSidenav === true){
      this.activeSidenav = false;
    }else{
      /* activar la tarjeta */
    }
  }

}
