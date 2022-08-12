import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeListPageComponent } from './employee-list-page/employee-list-page.component';
import { AddingEmployeePageComponent } from './adding-employee-page/adding-employee-page.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [{
    path: 'login',
    component: LoginComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }, {
    path: 'home',
    component: EmployeeListPageComponent
  }, {
    path: 'adding-employee-page',
    component: AddingEmployeePageComponent
  },

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
