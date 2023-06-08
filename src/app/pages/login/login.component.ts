import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { authSeviceComponent } from '../services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private pro: authSeviceComponent, private http: HttpClient) { }
  ngOnInit(): void { }


  user: any = {
    email: '',
    password: '',
    role:0,
  }

  login: any ={
    email: '',
    password: '',
    role:0,
  }


  async onsignup() {
    const response: any = await this.pro.Signup(this.user)
          try {
            // xử lý sau khi đăng ký thành công
          if (response) {
           alert("bạn đăng kí thành công")
            this.router.navigate(['/account']);
          }
          } catch (error) {
            console.log(error)
          }
    
    }

 async onlogin() {
  // const req= JSON.stringify(this.login)
  console.log(this.login);
  
  this.pro.login(this.login).subscribe(data => {
localStorage.setItem('auth', JSON.stringify(data));

if(data.user.role===0){
  alert("bạn đăng nhập thành công")
  this.router.navigate([''])
}
else{
  alert("bạn đăng nhập thành công")
  this.router.navigate(['/admin'])
}

  },
({error})=>{
  alert([error])
  
}
  )
 
  
  

  }
}

