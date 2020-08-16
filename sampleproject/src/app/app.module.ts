import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import {MatSliderModule} from '@angular/material/slider';
import { ChartComponent } from './chart/chart.component'

const  routes:  Routes  = [
  {
    path:  '',
    component:  LoginComponent ,
    },
  {
    path:  'register',
    component:  RegisterComponent,
    },
    {
      path:  'overview',
      component:  OverviewComponent,
      },
    {
      path:  'login',
      component:  LoginComponent ,
    },
    {
        path:  'chart',
        component:  ChartComponent ,
    },
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    OverviewComponent,
    ChartComponent,
    
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
