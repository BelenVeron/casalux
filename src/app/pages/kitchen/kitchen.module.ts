import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { KitchenRoutingModule } from './kitchen-routing.module';
import { AgmCoreModule } from '@agm/core';

//pages
import { IndexKitchenComponent } from './pages/index/index.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';

//components
import { kitchenGgComponent } from './components/bg/bg.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CollectionsComponent } from './pages/collections/collections.component';

import {SwiperModule} from 'swiper/angular';
import { FinishesComponent } from './pages/finishes/finishes.component';
import { OptionsComponent } from './pages/options/options.component';
import { SystemsComponent } from './pages/systems/systems.component';
import { StudiosComponent } from './pages/studios/studios.component';
import { AskComponent } from './pages/ask/ask.component';
import { ExpertsComponent } from './pages/experts/experts.component'


@NgModule({
  declarations: [
    IndexKitchenComponent,
    GetStartedComponent,
    kitchenGgComponent,
    SidebarComponent,
    CollectionsComponent,
    FinishesComponent,
    OptionsComponent,
    SystemsComponent,
    StudiosComponent,
    AskComponent,
    ExpertsComponent],
  imports: [
    CommonModule,
    KitchenRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBp8mUithh4jHhxoFniyG0x2KTUKl2xzR8'
    })
  ],
  exports:[]
})
export class KitchenModule { }
