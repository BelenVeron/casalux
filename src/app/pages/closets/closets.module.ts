import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared.module'

import { ClosetsRoutingModule } from './closets-routing.module';
import { IndexClosetsComponent } from './index-closets/index-closets.component';
import { WalkInComponent } from './walk-in/walk-in.component';
import { CollectionComponent } from './collection/collection.component';
import { StartingClosetComponent } from './starting-closet/starting-closet.component';
import { StepsStartingClosetComponent } from './starting-closet/steps-starting-closet/steps-starting-closet.component';
import { SelectModuleComponent } from './starting-closet/select-module/select-module.component';
import { MasterClosetComponent } from './master-closet/master-closet.component';
import { SelectMasterClosetComponent } from './master-closet/select-master-closet/select-master-closet.component';
import { StepsMasterClosetComponent } from './master-closet/steps-master-closet/steps-master-closet.component';


@NgModule({
  declarations: [
    IndexClosetsComponent,
    WalkInComponent,
    CollectionComponent,
    StartingClosetComponent,
    StepsStartingClosetComponent,
    SelectModuleComponent,
    MasterClosetComponent,
    SelectMasterClosetComponent,
    StepsMasterClosetComponent
  ],
  imports: [
    CommonModule,
    ClosetsRoutingModule,
    SharedModule
  ]
})
export class ClosetsModule { }
