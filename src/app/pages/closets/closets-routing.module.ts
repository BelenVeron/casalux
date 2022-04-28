import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexClosetsComponent } from './index-closets/index-closets.component';
import { WalkInComponent } from './walk-in/walk-in.component';
import { CollectionComponent } from './collection/collection.component';

const routes: Routes = [
  {path:'', component:IndexClosetsComponent},
  {path:'walk-in', component:WalkInComponent},
  {path:'collection/:id', component:CollectionComponent},
  /* {path:'preview', children:[
    {path:'estimate', component:PreviewEstimateComponent},
  ]},*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosetsRoutingModule { }
