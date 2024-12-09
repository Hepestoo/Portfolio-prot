import { Component, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entregable4',
  templateUrl: './entregable4.component.html',
  styleUrl: './entregable4.component.scss'
})
export class Entregable4Component {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    message: new FormControl('')

  });
}
