import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexClosetsComponent } from './index-closets/index-closets.component';
import { WalkInComponent } from './walk-in/walk-in.component';
import { CollectionComponent } from './collection/collection.component';
import { StartingClosetComponent } from './starting-closet/starting-closet.component';
import { MasterClosetComponent } from './master-closet/master-closet.component';

const routes: Routes = [
  {path:'', component:IndexClosetsComponent},
  {path:'walk-in', component:WalkInComponent},
  {path:'collection/:id', component:CollectionComponent},
  {path:'starting-closet/:id', component:StartingClosetComponent},
  {path:'master-closet/:id', component:MasterClosetComponent},
  /* {path:'preview', children:[
    {path:'estimate', component:PreviewEstimateComponent},
  ]},*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosetsRoutingModule { }
