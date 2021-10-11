import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuItem?: MenuItem
  constructor() { }

  ngOnInit(): void {
  }

}
