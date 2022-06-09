import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-closet',
  templateUrl: './master-closet.component.html',
  styleUrls: ['./master-closet.component.css']
})
export class MasterClosetComponent implements OnInit {
  activeSidenav: boolean = false;
  type = '';
  constructor() { }

  ngOnInit(): void {
  }
  openMenu(): void {
    this.activeSidenav = true;
  }
}
