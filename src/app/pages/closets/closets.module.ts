import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared.module'

import { ClosetsRoutingModule } from './closets-routing.module';
import { IndexClosetsComponent } from './index-closets/index-closets.component';
import { WalkInComponent } from './walk-in/walk-in.component';


@NgModule({
  declarations: [
    IndexClosetsComponent,
    WalkInComponent
  ],
  imports: [
    CommonModule,
    ClosetsRoutingModule,
    SharedModule
  ]
})
export class ClosetsModule { }
