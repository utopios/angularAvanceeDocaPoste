import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  // data?:Observable<string>
  data:Subject<string> = new Subject()
  constructor() { }
}
