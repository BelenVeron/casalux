import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { KitchenRoutingModule } from './kitchen-routing.module';
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';

//pages
import { IndexKitchenComponent } from './pages/index/index.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';

//components
import { SharedModule } from '../../shared.module'
import { kitchenGgComponent } from './components/bg/bg.component';
import { CollectionsComponent } from './pages/collections/collections.component';

import {SwiperModule} from 'swiper/angular';
import { FinishesComponent } from './pages/finishes/finishes.component';
import { OptionsComponent } from './pages/options/options.component';
import { SystemsComponent } from './pages/systems/systems.component';
import { StudiosComponent } from './pages/studios/studios.component';
import { AskComponent } from './pages/ask/ask.component';
import { ExpertsComponent } from './pages/experts/experts.component';
import { FavoriteComponent } from '../../components/favorite/favorite.component';
import { VideoPlayerComponent } from '../../components/video-player/video-player.component';
import { VerticalGalleryComponent } from '../../components/vertical-gallery/vertical-gallery.component';
import { MobileTitleComponent } from './components/mobile-title/mobile-title.component';
import { HorizontalGalleryComponent } from '../../components/horizontal-gallery/horizontal-gallery.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    IndexKitchenComponent,
    GetStartedComponent,
    kitchenGgComponent,
    CollectionsComponent,
    FinishesComponent,
    OptionsComponent,
    SystemsComponent,
    StudiosComponent,
    AskComponent,
    ExpertsComponent,
    FavoriteComponent,
    VideoPlayerComponent,
    VerticalGalleryComponent,
    MobileTitleComponent,
    HorizontalGalleryComponent,
    ButtonComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    KitchenRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBp8mUithh4jHhxoFniyG0x2KTUKl2xzR8'
    })
  ],
  exports:[]
})
export class KitchenModule { }
