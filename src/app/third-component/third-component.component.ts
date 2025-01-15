import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [],
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.css'
})
export class ThirdComponentComponent {

  constructor(private cartservice:CartService) { }
  
  usarservicio(){
    this.cartservice.mostrar();
  }

}
