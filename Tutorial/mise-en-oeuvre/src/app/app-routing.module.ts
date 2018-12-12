import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './features/index/index.module#IndexModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: './features/index/home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: './features/index/user/user.module#UserModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: './features/register/register.module#RegisterModule',
  },
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule',
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }