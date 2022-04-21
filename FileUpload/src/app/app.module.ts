import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFileUploadModule } from 'mat-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 MatFileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
