import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListPageComponent } from './employee-list-page/employee-list-page.component';
import { EmployeeDetailPageComponent } from './employee-detail-page/employee-detail-page.component';
import { AddingEmployeePageComponent } from './adding-employee-page/adding-employee-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeListPageComponent,
    EmployeeDetailPageComponent,
    AddingEmployeePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
