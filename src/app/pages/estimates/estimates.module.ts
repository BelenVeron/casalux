import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared.module'

import { EstimatesRoutingModule } from './estimates-routing.module';
import { AllComponent } from './all/all.component';
import { NewInvoiceCOmponent } from './new-invoice/new-invoice.component';
import { NewEstimateComponent } from './new-estimate/new-estimate.component';
import { PreviewEstimateComponent } from './preview-estimate/preview-estimate.component';


@NgModule({
  declarations: [
    AllComponent,
    NewInvoiceCOmponent,
    NewEstimateComponent,
    PreviewEstimateComponent
  ],
  imports: [
    CommonModule,
    EstimatesRoutingModule,
    SharedModule
  ]
})
export class EstimatesModule { }
