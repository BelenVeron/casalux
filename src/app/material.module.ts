import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule

  ],
  exports:[
    MatMenuModule
  ]
})
export class MaterialModule { }
