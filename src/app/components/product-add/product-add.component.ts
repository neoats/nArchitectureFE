import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    private toastrService: ToastrService
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

  add() {
    if (this.productAddForm.valid) {

      this.productService.add(this.productAddForm.value).subscribe({
        next: (data) => {
          console.log(data);
          this.toastrService.success(data.message, 'Added');
        },
        error: (errorResponse) => {
          if (errorResponse.error?.Errors?.length > 0) {
            errorResponse.error.Errors.forEach((error: { ErrorMessage: string; }) => {
              this.toastrService.error(error.ErrorMessage, 'Validation Errors');
            });
          }
          console.log(errorResponse.error);
        },
      });
    } else {
      this.toastrService.error('Format Error');
    }
  }


}
