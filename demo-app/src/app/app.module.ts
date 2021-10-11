import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoModule } from 'src/demo-todo-page/todo.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeModule } from './core/like';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToDoModule,
    LikeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
