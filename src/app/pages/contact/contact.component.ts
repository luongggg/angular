import { Component } from '@angular/core';
import { contactSeviceComponent } from '../services/contact.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  item:any ={
    name: '',
    sdt:'',
    email: '',
    content: '',
  }
  constructor(private pro:contactSeviceComponent,private Router:Router ){}
 onsubmit(){
  this.pro.contact(this.item).subscribe((data: any)=>{
    this.Router.navigate(["/"]);
    console.log(data);
    
  
   })
  
   alert("thêm thành công")

}
}
