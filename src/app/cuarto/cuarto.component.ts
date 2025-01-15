import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente';



@Component({
  selector: 'app-cuarto',
  standalone: true,
  imports: [FormsModule,NgStyle,NgFor],
  templateUrl: './cuarto.component.html',
  styleUrl: './cuarto.component.css'
})
export class CuartoComponent {

  mensaje:string="Hola Mundo";
  currentStyles:Record<string, string> = {
    'font-style':  'italic',
    'font-weight': 'bold',
    'font-size':   '24px'
  };
  productos = ['camisa','pantalon','zapatos','gorra','reloj'];
  clientes: Cliente[] = [
    { id: 1, nombre: 'Juan', ciudad: 'Madrid', facturación: 10000 },
    { id: 2, nombre: 'Ana', ciudad: 'Barcelona', facturación: 20000 },
    { id: 3, nombre: 'Pedro', ciudad: 'Sevilla', facturación: 15000 },
    { id: 4, nombre: 'Elena', ciudad: 'Valencia', facturación: 25000 },
    { id: 5, nombre: 'Luis', ciudad: 'Bilbao', facturación: 30000 },
  ];
}
