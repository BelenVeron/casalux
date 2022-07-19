import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SwiperModule} from 'swiper/angular';


//components
import { HeaderComponent } from './components/header/header.component';
import { EditComponent } from './components/edit/edit.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialComponent } from './components/social/social.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { VerticalGalleryComponent } from './components/vertical-gallery/vertical-gallery.component';
import { HorizontalGalleryComponent } from './components/horizontal-gallery/horizontal-gallery.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { VerticalDescriptionComponent } from './components/vertical-description/vertical-description.component';
import { ShapeComponent } from './components/shape/shape.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    EditComponent, 
    NavbarComponent,
    SocialComponent,
    NavHeaderComponent,
    CardComponent,
    ModalComponent,
    ButtonComponent,
    CheckboxComponent,
    Navbar2Component,
    VerticalGalleryComponent,
    HorizontalGalleryComponent,
    FavoriteComponent,
    VerticalDescriptionComponent,
    ShapeComponent,
    SecondaryHeaderComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SwiperModule,
  ],
  exports:[
    HeaderComponent, 
    EditComponent,
    NavbarComponent,
    SocialComponent,
    NavHeaderComponent,
    CardComponent,
    ModalComponent,
    ButtonComponent,
    CheckboxComponent,
    Navbar2Component,
    VerticalGalleryComponent,
    HorizontalGalleryComponent,
    FavoriteComponent,
    SwiperModule,
    VerticalDescriptionComponent,
    ShapeComponent,
    SecondaryHeaderComponent,
    SliderComponent
  ]
})
export class SharedModule { }
