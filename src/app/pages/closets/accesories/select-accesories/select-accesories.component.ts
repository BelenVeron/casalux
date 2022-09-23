import { Component, OnInit } from '@angular/core';
import { ConfigButton } from 'src/app/models/interfaces/config-button';
import { ConfigSwiperHorizontal } from 'src/app/models/interfaces/config-swiper-horizontal';
import { CONFIG_ACCESORIES_GALLERY, GALLERY_ACCESORIES } from '../../closets.data';

@Component({
  selector: 'app-select-accesories',
  templateUrl: './select-accesories.component.html',
  styleUrls: ['./select-accesories.component.css']
})
export class SelectAccesoriesComponent implements OnInit {

  configAccesoriesGallery: ConfigSwiperHorizontal = CONFIG_ACCESORIES_GALLERY;

  constructor() { }

  ngOnInit(): void {
  }

}
