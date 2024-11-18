import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; //importa CUSTOM_ELEMENTS_SCHEMA
import { SaludadorComponent } from './saludador/saludador.component'; // importa SaludadorComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SaludadorComponent], // <- agrega SaludadorComponent
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // <- Agrega CUSTOM_ELEMENTS_SCHEMA a los schemas
})
export class AppComponent {
  title = 'mi-app';
} 