import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import axios from 'axios'
interface User {
    email: string;
    password: string;
    // Các thuộc tính khác của người dùng
  }
@Injectable({
    providedIn: 'root'
})

export class authSeviceComponent {
    private apiUrl = './db.json'
    public _api = "http://localhost:3000";

    constructor(private http: HttpClient) {

    }
    Signup(data: any[]) {
        return axios.post(`${this._api}/register`, data)
    }
    login(data: any[]) {
        return this.http.post<any>(`${this._api}/login`,data)
    }
    changePassword(email: string, oldPassword: string, newPassword: string): boolean {
        if (email && oldPassword && newPassword) {
         
          if (this.validateEmailAndPassword(email, oldPassword)) {
         
            this.updatePassword(email, newPassword);
      
            return true;
          } else {
            return false; 
          }
        }
      
        return false; 
      }
      
      private validateEmailAndPassword(email: string, password: string): boolean {
        
      
     
        if (email === 'email' && password === 'password') {
          return true;
        } else {
          return false;
        }
      }
      
      
      private updatePassword(email: string, newPassword: string): void {
        // Thực hiện cập nhật mật khẩu mới ở đây
      }
}
