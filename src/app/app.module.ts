import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Entregable1Component } from './entregas/entregable1/entregable1.component';
import { Entregable2Component } from './entregas/entregable2/entregable2.component';
import { Entregable3Component } from './entregas/entregable3/entregable3.component';
import { HomeComponent } from './home/home.component';
import { Entregable4Component } from './entregas/entregable4/entregable4.component';
import { ButtonModule } from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Entregable1Component,
    Entregable2Component,
    Entregable3Component,
    HomeComponent,
    Entregable4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
