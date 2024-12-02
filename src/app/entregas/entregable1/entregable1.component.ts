import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregable1',
  templateUrl: './entregable1.component.html',
  styleUrl: './entregable1.component.scss'
})
export class Entregable1Component {
  constructor(private router: Router) { }

  // Método para redirigir a Home
  goToHome() {
    this.router.navigate(['/']);
  }
}
