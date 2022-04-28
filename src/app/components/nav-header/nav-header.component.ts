import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})

/* Navigation only en mobile */
export class NavHeaderComponent implements OnInit {

  @Output() sendViewNav = new EventEmitter<boolean>();
  @Input() viewNav:boolean = false;
  @Input() active:boolean = false;
  @Input() type:string = 'phone';

  constructor() { }

  ngOnInit(): void {
  }

  setViewNav() {
    this.active = !this.active;
    this.sendViewNav.emit(!this.viewNav);
  }

}
