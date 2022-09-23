import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  @Input() src: string = '/assets/img/kitchen/logo.png';
  @Input() showNavbar: boolean = false;
  /* open from the left */
  @Input() left: boolean = false;
  /* open from up to down */
  @Input() down: boolean = false;
  @Input() items: any = {}
  /* send the value of showNavbar to set the boolean active
     property in the parent component */
  @Output() sendShowNavbar = new EventEmitter<boolean>();

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  actionOrRedirect(route: string): void {
    if (route.slice(-3) !== 'php') {
      this.router.navigate([route])
    } else {
      window.open(route, "_blank");
    }
  }

  closeNav(): void {
    this.showNavbar = !this.showNavbar;
    this.sendShowNavbar.emit(this.showNavbar)
  }
  
  viewMobileNav(data: boolean): void {
    this.showNavbar = data;
    this.down = data;
    this.left = !data;
  }

}
