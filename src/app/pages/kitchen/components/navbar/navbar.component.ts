import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kitchennavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sidenav = false;
  mobileNav: boolean = false;
  askURL = environment.askURL;
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
    {title:'Ask the experts', icon:'search', route:this.askURL},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  viewNav(){
    this.sidenav = !this.sidenav
  }

  viewMobileNav(data: boolean){
    this.mobileNav = data;
    console.log(data)
  }

  viewOptions(item:any){
    item.selected = !item.selected
  }

  extRedirect(url: string) {
    window.open(url, "_blank");
  }
}
