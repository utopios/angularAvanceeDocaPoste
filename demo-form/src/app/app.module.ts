import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomFieldComponent } from './custom-field.component';
import { QuantityComponent } from './quantiy.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomFieldComponent,
    QuantityComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
