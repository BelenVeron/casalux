import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-closets',
  templateUrl: './index-closets.component.html',
  styleUrls: ['./index-closets.component.css']
})
export class IndexClosetsComponent implements OnInit {

  activeSidenav: boolean = false;
  items = [
    {title:'WARDROVE CLOSETS', route:'/closets', selected:false},
    {title:'WALK-IN-CLOSETS', route:'/closets', selected:false},
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

}
