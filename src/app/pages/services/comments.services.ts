import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


const _api="http://localhost:3000/comments";

@Injectable({
    providedIn:'root'
})
export class commentsService{
    constructor(private http:HttpClient){}
    
    getComments():Observable<any>{
        return this.http.get<any>(_api )
    }
    create(data:any):Observable<any>{
        return this.http.post<any>(_api ,data)
    }
    delete(id:string):Observable<any>{
        return this.http.delete<any>(`${_api}/${id}`)
    }
    detail(id:any):Observable<any>{
        return this.http.get<any>(`${_api}/${id}`)
    }
    update(id:string, data:string)              {
        return this.http.put<any>(`${_api}/`+id,data)
    }
    getCommentForProduct(id:string):Observable<any>{
        return this.http.get<any>(`${_api}?idProduct=${id}`)
    }

}

