import { Component, NgZone } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,
    private ngZone: NgZone
  ) {}
  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

/*   add() {
    if (!this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe((data) => {
        console.log(data);
        this.toastrService.success(data.message, 'Added');
      });
    } else {
      this.toastrService.error('Format Error');
    }
  } */
  add() {
    if (!this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.ngZone.runOutsideAngular(() => {
        this.productService.add(productModel).subscribe(data => {
          console.log(data);
          this.ngZone.run(() => {
            this.toastrService.success(productModel, 'Added');
          });
        });
      });
    } else {
      this.toastrService.error('Format Error');
    }
  }
}
