import { Injectable } from '@angular/core';
import { Product } from '../components/modals/product';
import { CartItems } from '../components/modals/cartItems';
import { CartItem } from '../components/modals/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(product: Product) {
    let item = CartItems.find(c => c.product.productId === product.productId);
    if (item) {
      item.quantity++;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }
  list():CartItem[] {
    return CartItems;
  }
  removeFromCart(product: Product){
     let item:CartItem = CartItems.find(c => c.product.productId === product.productId);
    CartItems.splice(CartItems.indexOf(item, 1));
  }
}
