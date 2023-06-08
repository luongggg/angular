import { Component } from '@angular/core';
import { productsService } from 'src/app/pages/services/products.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  product: any = {
    name: '',
    price: '',
    description: '',
    image: ''
  };

  errors: any = {
    name: false,
    price: false,
    description: false,
    image: false
  };

  constructor(private pro: productsService, private router: Router) { }

  onCreate() {
    this.validateForm();

    if (this.isFormValid()) {
      this.pro.create(this.product).subscribe(data => {
        this.router.navigate(['/admin']);
      });
      alert("Thêm thành công");
    } else {
      alert("Vui lòng điền đầy đủ thông tin sản phẩm.");
    }
  }

  validateForm() {
    this.errors = {
      name: false,
      price: false,
      description: false,
      image: false
    };

    if (this.product.name.trim() === '') {
      this.errors.name = true;
    }

    if (this.product.price.trim() === '') {
      this.errors.price = true;
    }

    if (this.product.description.trim() === '') {
      this.errors.description = true;
    }

    if (this.product.image.trim() === '') {
      this.errors.image = true;
    }
  }

  isFormValid(): boolean {
    return (
      this.product.name.trim() !== '' &&
      this.product.price.trim() !== '' &&
      this.product.description.trim() !== '' &&
      this.product.image.trim() !== ''
    );
  }
}
