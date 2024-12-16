import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Entregable1Component } from './entregas/entregable1/entregable1.component';
import { Entregable2Component } from './entregas/entregable2/entregable2.component';
import { Entregable3Component } from './entregas/entregable3/entregable3.component';
import { HomeComponent } from './home/home.component';
import { Entregable4Component } from './entregas/entregable4/entregable4.component';
import { Entregable5Component } from './entregas/entregable5/entregable5.component';
import { ExamenComponent } from './examen/examen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entregable1', component: Entregable1Component },
  { path: 'entregable2', component: Entregable2Component },
  { path: 'entregable3', component: Entregable3Component },
  { path: 'entregable4', component: Entregable4Component },
  { path: 'entregable5', component: Entregable5Component },
  { path: 'examen', component: ExamenComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
