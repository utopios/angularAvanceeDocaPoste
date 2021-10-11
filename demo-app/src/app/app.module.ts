import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoModule } from 'src/demo-todo-page/todo.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeModule } from './core/like';
import { CarouselModule } from './ui/carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToDoModule,
    LikeModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
