import { Injectable } from '@angular/core';
import { product } from '../classes/product';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  url:string="http://makeup-api.herokuapp.com/api/v1/products.json"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<product[]>{
    return this.httpClient.get<product[]>(this.url);
  }

  getAProduct(id:number):Observable<product>{
    return this.httpClient.get<product>("http://makeup-api.herokuapp.com/api/v1/products/" + id +".json")
  }
}
