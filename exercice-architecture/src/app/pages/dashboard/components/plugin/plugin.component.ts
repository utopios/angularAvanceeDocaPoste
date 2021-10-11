import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-page-plugin-component',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.css']
})
export class PluginComponent implements OnInit {
  @Input('plugins') listPlugins : Array<string> = new Array<string>()
  message: string = 'en cours de chargement'
  constructor() { }

  ngOnInit(): void {
    this.message = 'chargement términé'
  }

}
