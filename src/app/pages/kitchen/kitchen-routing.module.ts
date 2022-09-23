import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { FinishesComponent } from './pages/finishes/finishes.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { IndexKitchenComponent } from './pages/index/index.component';
import { OptionsComponent } from './pages/options/options.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { SystemsComponent } from './pages/systems/systems.component';
import { StudiosComponent } from './pages/studios/studios.component';
import { AskComponent } from './pages/ask/ask.component';
import { ExpertsComponent } from './pages/experts/experts.component';

const routes: Routes = [
  {path:'', component:IndexKitchenComponent},
  {path:'started', component:GetStartedComponent},
  {path:'studios', component:StudiosComponent},
  {path:'experts', component:ExpertsComponent},
  {path:'ask', component:AskComponent},
  {path:'products', children:[
    {path:'', redirectTo:'collections'},
    {path:'collections', component:CollectionsComponent},
    {path:'finishes', component:FinishesComponent},
    {path:'options', component:OptionsComponent},
    {path:'systems', component:SystemsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenRoutingModule { }
