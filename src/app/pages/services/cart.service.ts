import { Injectable } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ICart } from "../../common/cart"
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root'})
export class CartService {

 apiUrl ='http://localhost:3000/cart';

  constructor(private http: HttpClient) { }

  addToCart(item: any) {
    return this.http.post<any>(`${this.apiUrl}`, item);
  }

  getCartItems() {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  getdelet(id:any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`,);
  }
}