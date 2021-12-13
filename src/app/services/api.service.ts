import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  get(route:string){
    return this.http.get(`${environment.api}${route}`)
  }

  post(route:string, object:any){
    return this.http.post(`${environment.api}${route}`, object)
  }

  navigate(url:string){
    this.router.navigate([url])
  }
}
