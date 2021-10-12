import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router) {

  }

  title = 'routing-app';
  loading = false
  goTo(link:string) {
    this.loading = true
    this.router.navigate([`${link}`])
  }
}
