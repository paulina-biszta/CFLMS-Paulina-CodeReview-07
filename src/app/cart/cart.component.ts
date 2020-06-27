import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  totalCost;
  itemsPrice: number = 0;
  fullCart: boolean;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {this.checkoutForm = this.formBuilder.group({
    fname: '',
    lname: '',
    address: '',
    phone: ''
  }); }

    ngOnInit() {
      this.items = this.cartService.getItems();
      this.fullCart = typeof this.items != "undefined" && this.items.length > 0;
      for (let nextTrip of this.items) {
        this.itemsPrice += Number(nextTrip.price);
      }
  
      if(this.itemsPrice < 200){
        this.totalCost = `${this.itemsPrice} €`;
      } 
      else if (this.itemsPrice >= 200 && this.itemsPrice < 500 )
      {
        this.itemsPrice = this.itemsPrice * 0.9;
        this.totalCost = `(10% discount): ${this.itemsPrice} €`;
  
      }else if(this.itemsPrice >= 500)
      {
        this.itemsPrice = this.itemsPrice * 0.8;
        this.totalCost = `(20% discount): ${this.itemsPrice} €`;
      }
    }
  }
    



