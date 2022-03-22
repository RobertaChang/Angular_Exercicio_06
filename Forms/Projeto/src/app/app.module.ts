import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { TdUsersModule } from './td-users/td-users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactUsersModule } from './react-users/react-users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    TdUsersModule,
    BrowserAnimationsModule,
    ReactUsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
