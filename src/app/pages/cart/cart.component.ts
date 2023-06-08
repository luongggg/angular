import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems:any=''
 constructor(private pro:CartService,private router:Router){
  this.pro.getCartItems().subscribe((Array)=>{
  //  const Arrays= JSON.stringify(Array);
   
    this.cartItems = Array
  })
  
 }
 delet(id:any){
  console.log(id);
this.pro.getdelet(id).subscribe(()=>{
  console.log(id);
  this.cartItems= this.cartItems.filter((item:any)=>{
      return item.id !== id;
    })
    alert("xóa thành công")
})

this.router.navigate(['/cart'])
 } 

}
