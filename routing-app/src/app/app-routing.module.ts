import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsPage } from './pages/comments.page';
import { ContactPage } from './pages/contact.page';
import { HomePage } from './pages/home.page';
import { ProductPage } from './pages/product.page';
import { ProductsPage } from './pages/products.page';

const routes: Routes = [
  {path :'', component:HomePage},
  {path:'auth', loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path :'contact', component: ContactPage},
  {path :'products', component: ProductsPage},
  {path :'product/:id', component: ProductPage, children:[
    {path:'comments', component: CommentsPage }
  ] },
  {path: '**', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
