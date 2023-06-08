import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
_api="http://localhost/3000/users"
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get(`${this._api}`)
  }
  getdelet(id:any){
    return this.http.get<any>(`${this._api}/${id}`)
}
}
