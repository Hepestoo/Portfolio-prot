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
import { Entregable5Component } from './entregas/entregable5/entregable5.component';
import { CarouselModule } from 'primeng/carousel'; // Importación correcta
import { TagModule } from 'primeng/tag';   
import { CommonModule } from '@angular/common';
import { ExamenComponent } from './examen/examen.component';   

@NgModule({
  declarations: [
    AppComponent,
    Entregable1Component,
    Entregable2Component,
    Entregable3Component,
    HomeComponent,
    Entregable4Component,
    Entregable5Component,
    ExamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    CarouselModule,
    TagModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
