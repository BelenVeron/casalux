import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchensidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidenav = false
  items = [
    {title:'GET STARTED', route:'/luxurykitchen/started', selected:false},
    {title:'VISUALIZER', route:'/luxurykitchen/start', selected:false},
    {title:'PRODUCT', children:[
      {title:'Collections', route:'/luxurykitchen/products/collections'},
      {title:'Finishes', route:'/luxurykitchen/products/finishes'},
      {title:'Additional Options', route:'/luxurykitchen/products/options'},
      {title:'Opening Systems', route:'/luxurykitchen/products/systems'}
    ]},
    {title:'STUDIOS', route:'/luxurykitchen/studios', selected:false},
    {title:'EXPERTS & PROJECTS', route:'/luxurykitchen/experts', selected:false},
    {title:'CLIENT AREA', route:'/luxurykitchen/start', selected:false},
  ]
  actions = [
    {title:'Download catalog', icon:'download', route:'/luxurykitchen/start'},
    {title:'Ask the experts', icon:'search', route:'/luxurykitchen/ask'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  viewNav(){
    this.sidenav = !this.sidenav
  }

  viewOptions(item:any){
    item.selected = !item.selected
  }
}
