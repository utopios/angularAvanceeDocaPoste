import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() logo:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
