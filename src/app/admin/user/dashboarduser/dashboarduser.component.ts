
import { HttpClient } from '@angular/common/http';
import { Component,Pipe } from '@angular/core';
import { Form, FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { productsService } from 'src/app/pages/services/products.services';
import { UserService } from 'src/app/pages/services/user.service';

@Component({
  selector: 'app-dashboarduser',
  templateUrl: './dashboarduser.component.html',
  styleUrls: ['./dashboarduser.component.css']
})

export class DashboarduserComponent {
  


public products:any = []
  constructor(private pro:UserService,private h:HttpClient,private router: Router){
    this.h.get("http://localhost:3000/users").subscribe(
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
 
 
  
  
}

