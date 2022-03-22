import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactHomeComponent } from './components/react-home/react-home.component';
import { MaterialModule } from '../material/material.module';
import { ReactDialogComponent } from './components/react-dialog/react-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReactHomeComponent,
    ReactDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactHomeComponent
  ]
})
export class ReactUsersModule { }
