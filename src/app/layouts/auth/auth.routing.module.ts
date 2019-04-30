import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(AuthRoutes)
    ],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }