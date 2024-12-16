import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrl: './examen.component.scss'
})
export class ExamenComponent {
  constructor(private router: Router) { }
  
    // Método para redirigir a Home
    goToHome() {
      this.router.navigate(['/']);
    }

  products = [
    { 
      name: 'Mario', 
      price: 999, 
      inventoryStatus: 'In Stock', 
      image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Mario', 
      price: 999, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Mario', 
      price: 999, 
      inventoryStatus: 'In Stock', 
      image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Mario', 
      price: 999, 
      inventoryStatus: 'In Stock', 
      image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Mario', 
      price: 999, 
      inventoryStatus: 'In Stock', 
      image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Mario', 
      price: 999, 
      inventoryStatus: 'In Stock', 
      image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }

  profileForm = new FormGroup({
      firstName: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      message: new FormControl('')
  
    });


}
