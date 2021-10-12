import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RegisterPage } from './pages/register.page';

const routes : Route[] = [
  {
    path : '', component: RegisterPage
  }
]

@NgModule({
  declarations: [RegisterPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
