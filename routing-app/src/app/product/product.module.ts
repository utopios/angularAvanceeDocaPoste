import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPage } from './pages/product.page';
import { ProductsPage } from './pages/products.page';
import { ProductsService } from './shared/products.service';
import { RouterModule, Routes } from '@angular/router';
import { CommentsPage } from './pages/comments.page';

const routes:Routes = [
  {path : '', component: ProductsPage},
  {path : ':id', component: ProductPage, children: [
    {path : 'comments', component: CommentsPage}
  ]},
]

@NgModule({
  declarations: [ProductPage, ProductsPage, CommentsPage],
  providers:[ProductsService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
