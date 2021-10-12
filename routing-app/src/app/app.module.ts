import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsPage } from './pages/comments.page';
import { ContactPage } from './pages/contact.page';
import { HomePage } from './pages/home.page';
import { ProductPage } from './pages/product.page';
import { ProductsPage } from './pages/products.page';
import { ProductsService } from './pages/shared/products.service';

@NgModule({
  declarations: [
    AppComponent, HomePage, ContactPage, ProductsPage, ProductPage, CommentsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
