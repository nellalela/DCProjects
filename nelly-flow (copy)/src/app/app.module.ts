import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FasterComponent } from './faster/faster.component';
import { SmarterComponent } from './smarter/smarter.component';
import { ConfidentComponent } from './confident/confident.component';
import { BiggerComponent } from './bigger/bigger.component';
import { ReadyComponent } from './ready/ready.component';
import { ColumnComponent } from './column/column.component';
import { FooterComponent } from './footer/footer.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { GetstartedComponent } from './getstarted/getstarted.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FasterComponent,
    SmarterComponent,
    ConfidentComponent,
    BiggerComponent,
    ReadyComponent,
    ColumnComponent,
    FooterComponent,
    DocumentsComponent,
    HomeComponent,
    GetstartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
