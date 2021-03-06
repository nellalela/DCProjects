import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,

    DetailsComponent,

    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
