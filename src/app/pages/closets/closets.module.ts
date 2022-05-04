import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared.module'

import { ClosetsRoutingModule } from './closets-routing.module';
import { IndexClosetsComponent } from './index-closets/index-closets.component';
import { WalkInComponent } from './walk-in/walk-in.component';
import { CollectionComponent } from './collection/collection.component';
import { StartingClosetComponent } from './starting-closet/starting-closet.component';


@NgModule({
  declarations: [
    IndexClosetsComponent,
    WalkInComponent,
    CollectionComponent,
    StartingClosetComponent
  ],
  imports: [
    CommonModule,
    ClosetsRoutingModule,
    SharedModule
  ]
})
export class ClosetsModule { }
