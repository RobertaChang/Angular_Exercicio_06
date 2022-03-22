import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdHomeComponent } from './components/td-home/td-home.component';
import { TdDialogComponent } from './components/td-dialog/td-dialog.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TdHomeComponent,
    TdDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    TdHomeComponent
  ]
})
export class TdUsersModule { }
