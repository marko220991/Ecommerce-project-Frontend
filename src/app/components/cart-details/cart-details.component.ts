import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.listCartDetails();
  }

  listCartDetails() {
    
    //get cart items
    this.cartItems = this.cartService.cartItems;

    //subsribe to totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    //subsribe to totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    //compute total price and quantity
    this.cartService.computeCartTotals();
  }

  incrementQuantity(item: CartItem) {
      this.cartService.addToCart(item); 
  }
  decrementQuantity(item: CartItem) {
    this.cartService.removeFromCart(item); 
  }

  removeItem(item: CartItem) {
    this.cartService.remove(item);
  }

}
