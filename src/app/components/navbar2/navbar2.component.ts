import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  @Input() src: string = '/assets/img/kitchen/logo.png';
  @Input() showNavbar: boolean = false;
  @Input() left: boolean = false;
  @Input() down: boolean = false;
  mobileNav: boolean = false;
  @Input() primaryItems: any = [];
  @Input() secondaryItems: any = [];
  @Input() buttons: any = [];
  @Input() description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  actionOrRedirect(route: string): void {
    
  }

  extRedirect(route: string): void {
    window.open(route, "_blank");
  }

  viewMobileNav(data: boolean){
    this.mobileNav = data;
  }

}
