import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPage } from './pages/product.page';
import { ProductsPage } from './pages/products.page';
import { ProductsService } from './shared/products.service';
import { RouterModule, Routes } from '@angular/router';
import { CommentsPage } from './pages/comments.page';
import { ProductResolver } from './shared/product.resolver';
import { ProductsResolver } from './shared/products.resolver';
import { UiModule } from '../ui/ui.module';

const routes:Routes = [
  {path : '', component: ProductsPage, resolve: {
    products: ProductsResolver
  }},
  {path : ':id', component: ProductPage, resolve: {
    product: ProductResolver
  }, children: [
    {path : 'comments', component: CommentsPage}
  ]},
]

@NgModule({
  declarations: [ProductPage, ProductsPage, CommentsPage],
  providers:[ProductsService, ProductResolver, ProductsResolver],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule
  ]
})
export class ProductModule { }
