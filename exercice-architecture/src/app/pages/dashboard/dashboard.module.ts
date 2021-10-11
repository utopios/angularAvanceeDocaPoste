import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { PluginService } from './shared/service/plugin.service';
import { PluginComponent } from './components/plugin/plugin.component';

const routes:Route[] = [
  {
    path : '', component : HomePage
  }
]

@NgModule({
  declarations: [HomePage, PluginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[PluginService]
})
export class DashboardModule { }
