import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregable2',
  templateUrl: './entregable2.component.html',
  styleUrl: './entregable2.component.scss'
})
export class Entregable2Component {
  constructor(private router: Router) { }

  // Método para redirigir a Home
  goToHome() {
    this.router.navigate(['/']);
  }
}
