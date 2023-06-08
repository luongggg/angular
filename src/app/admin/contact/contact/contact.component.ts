import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productsService } from 'src/app/pages/services/products.services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public products:any = []
  constructor(private pro:productsService,private h:HttpClient,private router: Router){
    this.h.get("http://localhost:3000/contact").subscribe(
      res => { this.products= res; console.log(res); }
    )
    
    // this.pro.getproducts().subscribe(({product})=>{
    //   this.products= product;
    //   console.log(this.products); 
    // })
    
  };

  deleteProduct(id:string){

    this.pro.delet(id).subscribe(()=>{
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
 
  
 
  
  
}
