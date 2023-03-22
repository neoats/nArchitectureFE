import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../modals/cartItem';
import { Product } from '../modals/product';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {
  cartItems: CartItem[];

  constructor(private cartService:CartService,private toasterService:ToastrService) {


  }

  ngOnInit(): void {
    this.getCart();
  }
  getCart()  {
    this.cartItems= this.cartService.list();
  }
  removeFromCart(product: Product) {

    this.cartService.removeFromCart(product);
    this.toasterService.error(product.productName," removed")
  }
}
