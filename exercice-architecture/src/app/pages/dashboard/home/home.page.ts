import { Component, OnInit } from '@angular/core';
import { PluginService } from '../shared/service/plugin.service';

@Component({
  selector: 'dashboard-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {
  listPlugins : Array<string>
  constructor(private pluginService:PluginService) { 
    this.listPlugins = pluginService.getDashBoardService()
  }

  ngOnInit(): void {
  }

}
