import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { NewEstimateComponent } from './new-estimate/new-estimate.component';
import { NewInvoiceCOmponent } from './new-invoice/new-invoice.component';
import { PreviewEstimateComponent } from './preview-estimate/preview-estimate.component';

const routes: Routes = [
  {path:'', component:AllComponent},
  {path:'invoice', component:NewInvoiceCOmponent},
  {path:'estimate', component:NewEstimateComponent},
  {path:'preview', children:[
    {path:'estimate', component:PreviewEstimateComponent},
    {path:'invoice', component:PreviewEstimateComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatesRoutingModule { }
