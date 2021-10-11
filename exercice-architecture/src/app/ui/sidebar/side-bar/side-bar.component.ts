import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../interfaces/config.interface';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() config?: Config
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
