import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexClosetsComponent } from './index-closets/index-closets.component';
import { CollectionComponent } from './collection/collection.component';
import { StartingClosetComponent } from './starting-closet/starting-closet.component';
import { MasterClosetComponent } from './master-closet/master-closet.component';
import { DimensionsComponent } from './dimensions/dimensions.component';
import { ModuleComponent } from './module/module.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { AccesoriesCartComponent } from './accesories/accesories-cart/accesories-cart.component';
import { IndexGalleryComponent } from './index-gallery/index-gallery.component';

const routes: Routes = [
  {path:'', component:IndexClosetsComponent},
  {path:'walk-in', component:IndexGalleryComponent},
  {path:'wardrobe', component:IndexGalleryComponent},
  {path:'center-island', component:IndexGalleryComponent},
  {path:'collection/:id', component:CollectionComponent},
  {path:'starting-closet/:id', component:StartingClosetComponent},
  {path:'master-closet/:id', component:MasterClosetComponent},
  {path:'dimensions/:id', component:DimensionsComponent},
  {path:'module/:id', component:ModuleComponent},
  {path:'accesories/:id', component:AccesoriesComponent},
  {path:'accesories-cart/:id', component:AccesoriesCartComponent},
  /* {path:'preview', children:[
    {path:'estimate', component:PreviewEstimateComponent},
  ]},*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosetsRoutingModule { }
