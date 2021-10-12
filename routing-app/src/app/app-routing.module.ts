import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactPage } from './pages/contact.page';
import { HomePage } from './pages/home.page';


const routes: Routes = [
  {path :'', component:HomePage},
  {path:'auth', loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path :'contact', component: ContactPage},
  {path :'products', loadChildren : () => import('./product/product.module').then(m => m.ProductModule)},
  {path: '**', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
