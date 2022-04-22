import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

//components
import { HeaderComponent } from './components/header/header.component';
import { EditComponent } from './components/edit/edit.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialComponent } from './components/social/social.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    EditComponent, 
    NavbarComponent,
    SocialComponent,
    NavHeaderComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    HeaderComponent, 
    EditComponent,
    NavbarComponent,
    SocialComponent,
    NavHeaderComponent,
    CardComponent,
  ]
})
export class SharedModule { }
