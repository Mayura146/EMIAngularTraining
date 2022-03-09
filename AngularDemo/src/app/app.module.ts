import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmiLogModule } from 'emi-log';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmiLogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
