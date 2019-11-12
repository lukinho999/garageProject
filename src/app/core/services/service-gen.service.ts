import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGenService<T> {

  constructor(private http :HttpClient,private router:Router ) {
    
   }
   getall(url:string):Observable<T[]>{
    return this.http.get<T[]>(url);
  }

  // Créer un client

  post(url:string,data: T):Observable<T>{
    return this.http.post<T>(url,data)
  }
  // Put est la mise a jour, c'est pour ca que j'ai besoin de l'id
  put(url:string, id:number, data: T):Observable<T>{
    return this.http.put<T>(url+'/'+id,data)
  }

  delete(url:string, id:number):Observable<T>{
    return this.http.delete<T>(url+'/'+id)
  }
}
