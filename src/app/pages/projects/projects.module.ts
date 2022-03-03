import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { PanelComponent } from './panel/panel.component';
import { SharedModule } from 'src/app/shared.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class ProjectsModule { }
