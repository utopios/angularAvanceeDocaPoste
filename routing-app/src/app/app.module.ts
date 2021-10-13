import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPage } from './pages/contact.page';
import { HomePage } from './pages/home.page';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent, HomePage, ContactPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
