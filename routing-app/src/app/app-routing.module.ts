import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadStrategyService } from './core/services/custom-preload-strategy.service';

import { ContactPage } from './pages/contact.page';
import { HomePage } from './pages/home.page';


const routes: Routes = [
  {path :'', component:HomePage},
  {path:'auth', data: {preload: true}, loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path :'contact', component: ContactPage},
  {path :'products', loadChildren : () => import('./product/product.module').then(m => m.ProductModule)},
  {path: '**', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //PreloadAllModules permet de charger la totalité des modules même en lazy loading
    //NoPreloading => par défaut
    preloadingStrategy: CustomPreloadStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
