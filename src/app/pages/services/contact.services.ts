
import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';


const _api = "http://localhost:3000/contact"
@Injectable({
    providedIn: 'root'
})

export class contactSeviceComponent {

constructor(private http:HttpClient){}
contact(data:any){
    return this.http.post<any>(_api ,data)
}
delet(id:any){
    return this.http.delete<any>(`${_api} /${id}`)
}
}