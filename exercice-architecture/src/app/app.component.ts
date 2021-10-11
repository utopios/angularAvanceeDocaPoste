import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercice-architecture';
  config = {
    logo : 'assets/img/logo.png',
    menuItems : [
      {path:'/', title:'dashboard'}
    ]
  }
}
