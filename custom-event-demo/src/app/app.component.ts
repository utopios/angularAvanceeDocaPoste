import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-event-demo';

  eventDelay(val:any) {
    console.log(val)
    alert(val)
  }
}
