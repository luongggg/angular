import { HttpClient } from '@angular/common/http';
import { Component,Pipe } from '@angular/core';
import { Form, FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { productsService } from 'src/app/pages/services/products.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  
searchtext:any = ''

public products:any = []
  constructor(private pro:productsService,private h:HttpClient,private router: Router){
    this.h.get("http://localhost:3000/products").subscribe(
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
  onSearch(){
   
    this.products= this.products.filter(({ name }: {
    name: any;
}): any=>{
    
     
     console.log(name); 
      return name.searchtext?.toLocaleLowerCase().match(this.searchtext.toLocaleLowerCase(this.products));
    })
    
    
  }
  
 
  
  
}
