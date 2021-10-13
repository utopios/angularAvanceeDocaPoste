import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router:Router, private loadingService:LoadingService) {

  }
  ngOnInit(): void {
    this.loadingService.isLoading.subscribe(res => {
      this.loading = res
    })
  }

  title = 'routing-app';
  loading = false
  goTo(link:string) {
    this.router.navigate([`${link}`])
  }
}
