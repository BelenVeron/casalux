import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input() items: any[] = [
    {name: 'fab fa-facebook'},
    {name: 'fab fa-instagram'},
    {name: 'fab fa-linkedin'},
    {name: 'fab fa-pinterest'},
    {name: 'fas fa-home'} 
  ]
  @Input() type: string = 'social';

  constructor() { }

  ngOnInit(): void {
  }

}
