import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RxjsService } from '../rxjs.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  constructor(private rxjsService:RxjsService) {
    // rxjsService.data = new Observable((observe) => {
    //   for(let i=1; i <=10; i++) {
    //     setTimeout(() => {
    //       observe.next("value " +i)
    //     },2000*i)
    //   }
    // })
    for(let i=1; i <=10; i++) {
      setTimeout(() => {
        rxjsService.data.next("value " +i)
      },2000*i)
    }
   }

  ngOnInit(): void {
  }

}
