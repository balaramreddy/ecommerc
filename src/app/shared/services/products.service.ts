import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL:string = environment.url
  constructor(private http:HttpClient) { }

  getproducts(){
      let params = new HttpParams({
        fromObject:{
          limit:200,
          skip:0
        }
      })
    return this.http.get(`${this.URL}products`,{params:params})
  }
  
  getCategories(){
    return this.http.get(`${this.URL}products/categories`)
  }
}
