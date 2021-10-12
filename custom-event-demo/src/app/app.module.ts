import { NgModule } from '@angular/core';
import { BrowserModule, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickedWithDelayDirective } from './clicked-with-delay.directive';
import { CustomEventManagerService } from './custom-event-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    ClickedWithDelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: EVENT_MANAGER_PLUGINS,
    useExisting: CustomEventManagerService,
    multi: true  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
