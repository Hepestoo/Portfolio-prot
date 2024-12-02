import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Entregable1Component } from './entregas/entregable1/entregable1.component';
import { Entregable2Component } from './entregas/entregable2/entregable2.component';
import { Entregable3Component } from './entregas/entregable3/entregable3.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Entregable1Component,
    Entregable2Component,
    Entregable3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
