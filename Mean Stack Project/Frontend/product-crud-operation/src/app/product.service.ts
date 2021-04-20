import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model.product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public http:HttpClient) { }
//post method 1st parameter url and 2nd parameter json data. 
  storeProductDetailsInfo(productRef:any){
    this.http.post("http://localhost:9090/product/storeProductDetails",productRef).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  retrieveAllProductDetails():Observable<Product[]>{
     return this.http.get<Product[]>("http://localhost:9090/product/allProductDetails")
  }

  retrieveProductById(id:any):Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/product/retrieveProductById/"+id)
  }
}
