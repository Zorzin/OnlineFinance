
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import { CreateReciptComponent } from './receipt/createreceipt.component';
const appRoutes: Routes = [
  
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
      path:'register',
      component: RegisterComponent
  },
  {
    path:"create",
    component: CreateReciptComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);