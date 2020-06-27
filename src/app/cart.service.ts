
import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class CartService {
 items = [];
 constructor() { }

 addToCart(o) {
   this.items.push(o);
 }

 getItems() {
   return this.items;
 }

 clearCart() {
   this.items = [];
   return this.items;
 }
}