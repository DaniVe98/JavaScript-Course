import { Component } from '@angular/core';

@Component({
  selector: 'app-saludador',
  standalone: true, 
  imports: [],
  templateUrl: './saludador.component.html',
  styleUrl: './saludador.component.css'
})
export class SaludadorComponent {
  mensaje: string = '';

  saludar(){
    this.mensaje = "Hola mundo";
  }
}
