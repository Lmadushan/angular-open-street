import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularOpenStreetComponent } from '../../../angular-open-street/src/lib/components/angular-open-street/angular-open-street.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularOpenStreetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
