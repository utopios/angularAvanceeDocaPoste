import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable , of, timer } from 'rxjs';
import {map} from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class CustomPreloadStrategyService implements PreloadingStrategy {

  constructor() { }
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if(this.slowConnection()) {
      return of(null)
    }
    if(route.data && route.data.preload) {
      
      return fn()
    }
    if(route.data && route.data.delay > 0) {    
     return timer(route.data.delay).pipe(map(() => fn()))
    }
    return of(null)
  }

  slowConnection() {
    const connection = navigator.connection
    const typeConnection = connection?.type
    if(connection) {
      return typeConnection == "cellular"
    } else {
      return false
    }
  }
}
