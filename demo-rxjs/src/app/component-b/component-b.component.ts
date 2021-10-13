import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../rxjs.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  data:Array<string> = new Array()
  constructor(private rxjsService:RxjsService) { }

  ngOnInit(): void {
    this.rxjsService.data?.subscribe((value) => {
      this.data.push(value)
    })
    
  }

}
