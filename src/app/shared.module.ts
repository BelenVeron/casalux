import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

//components
import { HeaderComponent } from './components/header/header.component';
import { EditComponent } from './components/edit/edit.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [HeaderComponent, EditComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[HeaderComponent, EditComponent]
})
export class SharedModule { }
