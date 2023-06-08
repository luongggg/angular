import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';
import { productsService } from '../services/products.services';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public products:any = ''
  
  constructor(private pro:productsService, private cart:CartService, private http:HttpClient, private router:Router){
    this.http.get("http://localhost:3000/products").subscribe(
      products => { this.products= products; console.log(products); }
    )
    
  }
  addtoCart(data:any) {
    console.log(data);
    // console.log(this.cart.addToCart().subscribe((data)=>console.log(data)
    // ));
    
    this.cart.addToCart(data)
      .subscribe(() => {
     
      
        alert('Thêm vào giỏ hàng thành công')
      });
  }





  
  // products: Product[] = [
  //  
  // ];
}
