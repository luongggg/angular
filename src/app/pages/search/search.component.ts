import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsService } from '../services/products.services';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  key: string;
  products: Product[];
  constructor(
    private pro: productsService,
    private route: ActivatedRoute,

  )
  {
    this.key = '',
      this.products = []
  }

  ngOnInit(): void {
    this.searchProduct(); //khi render component thì sẽ chạy 
  }


  searchProduct() {
    // 
    this.route.queryParams.subscribe(params => {
      this.key = params['key']  // lấy key từ trên url "params['key']" gán vào biến key khai báo
      this.pro.search(params['key']).subscribe(data=>{ //call api search
        this.products = data // gán dữ liệu khi call thành công vào biến products
      })
  });
  }
}