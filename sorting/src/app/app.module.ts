import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CirculoComponent } from './circulo/circulo.component';

import { RandomComponent } from './random/random.component';

import { Year1Component } from './year1/year1.component';

@NgModule({
  declarations: [
    AppComponent,
    CirculoComponent,
    
    RandomComponent,

    Year1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
