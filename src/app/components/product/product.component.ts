import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../modals/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  dataLoaded: boolean = false;
  filterText: string = '';
  stockCount: number = 0;
  /* not necessary bullet
 productResponseModal: ProductResponseModal = {
    data: this.products,
    message: "",
    succcess:true
  }; */

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    console.log('init works');

  this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });

  }

  getProducts(){

     this.productService.getProducts().subscribe((response)=>{
      this.products = response.data;
      console.log('Products response:', response)
      this.dataLoaded = true;
    },(error)=>{
      console.log(error)
    })

  }

  getProductsByCategory(categoryId:number){
    this.dataLoaded = true;
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = false;
    },error=>{
      console.log(error)
    })
  /*   this.productService.getProductsByCategory(categoryId).subscribe({
      next: (response) => {
        this.products = response.data;;
        this.dataLoaded = false;
      },
      error: (error) => {
        console.log(error)
      }
    }); */
  }

  addToCart(product: Product) {
    if (product.unitsInStock > 0) {
      product.unitsInStock--;
      this.cartService.addToCart(product);
      this.toastrService.success(product.productName, 'Added to cart');
    } else {
      this.toastrService.error(product.productName, 'Out of stock');
    }
  }
}
