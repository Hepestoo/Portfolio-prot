import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregable3',
  templateUrl: './entregable3.component.html',
  styleUrl: './entregable3.component.scss'
})
export class Entregable3Component {
  constructor(private router: Router) { }

  // Método para redirigir a Home
  goToHome() {
    this.router.navigate(['/']);
  }
}
