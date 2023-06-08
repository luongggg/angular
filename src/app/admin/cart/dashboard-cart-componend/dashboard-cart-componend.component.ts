import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/pages/services/cart.service';

@Component({
  selector: 'app-dashboard-cart-componend',
  templateUrl: './dashboard-cart-componend.component.html',
  styleUrls: ['./dashboard-cart-componend.component.css']
})
export class DashboardCartComponendComponent {
  public products:any = []
  constructor(private pro:CartService,private h:HttpClient,private router: Router){
    this.h.get("http://localhost:3000/cart").subscribe(
      res => { this.products= res; console.log(res); }
    )
    
    // this.pro.getproducts().subscribe(({product})=>{
    //   this.products= product;
    //   console.log(this.products); 
    // })
    
  };

  deleteProduct(id:string){

    this.pro.getdelet(id).subscribe(()=>{
     this.products=this.products.filter((item:any)=>{
        return  item.id !==id
     }) 
    })
    this.router.navigateByUrl("admin")
    alert("bạn xóa sản phẩm")
    
  }
  ngOnInit():void{
    this.products
  }
//   onSearch(){
   
//     this.products= this.products.filter(({ name }: {
//     name: any;
// }): any=>{
    
     
//      console.log(name); 
//       return name.searchtext?.toLocaleLowerCase().match(this.searchtext.toLocaleLowerCase(this.products));
//     })
    
    
  }
  
 
  
  


