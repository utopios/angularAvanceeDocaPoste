import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomFieldComponent } from './custom-field.component';
import { DataComponent } from './data-component';
import { QuantityComponent } from './quantiy.component';
import {ScrollingModule} from "@angular/cdk/scrolling"
@NgModule({
  declarations: [
    AppComponent,
    CustomFieldComponent,
    QuantityComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
