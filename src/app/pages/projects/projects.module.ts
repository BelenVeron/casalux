import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { PanelComponent } from './panel/panel.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
