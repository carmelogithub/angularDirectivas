import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

mostrar():void{
  console.log("método mostrar del servicio cart");
}

}//cierra class
