import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/common/product";

const _api="http://localhost:3000/products";
@Injectable({
    providedIn:'root'
})
export class productsService{
    constructor(private http:HttpClient){}
    
    getproducts():Observable<any>{
        return this.http.get<Product[]>(_api )
    }
    create(data:any):Observable<any>{
        return this.http.post<any>(_api ,data)
    }
    delet(id:string):Observable<any>{
        return this.http.delete<any>(`${_api}/${id}`)
    }
    detail(id:any):Observable<any>{
        return this.http.get<Product>(`${_api}/${id}`)
    }
    update(id:string, data:string)              {
        return this.http.put<any>(`${_api}/`+id,data)
    }
    search(key:any):Observable<any>{
        return this.http.get<any>(`${_api}?q=${key}`)
    }

}